var express = require("express");
var router = express.Router();
const DButils = require("../routes/utils/DButils");
const associationMember_utils = require("../routes/utils/associationMember_utils");
const bcrypt = require("bcryptjs");

router.post("/Register", async (req, res, next) => {
  try {
    // parameters exists
    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let country = req.body.country
    let password = req.body.password;
    let email = req.body.email;
    let image_url = req.body.image_url;
    if (username == undefined || firstname == undefined ||
        lastname == undefined  || country == undefined ||
        password == undefined || email == undefined || image_url == undefined){
      throw { status: 400, message: "Missing Parameters" };
    }
    // valid parameters
    // username exists
    const users = await DButils.execQuery(
      "SELECT username FROM dbo.users"
    );

    if (users.find((x) => x.username === req.body.username))
      throw { status: 409, message: "Username taken" };

    //hash the password
    let hash_password = bcrypt.hashSync(
      req.body.password,
      parseInt(process.env.bcrypt_saltRounds)
    );
    req.body.password = hash_password;

    // add the new username
    await DButils.execQuery(
      `INSERT INTO dbo.users (username, password, firstname, lastname, country, email, image_url)
      VALUES ('${username}', '${hash_password}', '${firstname}', '${lastname}',
       '${country}', '${email}', '${image_url}')`
    );
    res.status(201).send("user created");
  } catch (error) {
    next(error);
  }
});

router.post("/Login", async (req, res, next) => {
  try {
    const user = (
      await DButils.execQuery(
        `SELECT * FROM dbo.users WHERE username = '${req.body.username}'`
      )
    )[0];
    // user = user[0];
    console.log(user);

    // check that username exists & the password is correct
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      throw { status: 401, message: "Username or Password incorrect" };
    }
    let userIsAssociationMember = await associationMember_utils.userIsAssociationMember_utils(user.user_id);
    const jsonAnsAssociationMember ={
      isAssociationMember: userIsAssociationMember
    };
    // Set cookie
    req.session.user_id = user.user_id;

    // return cookie
    res.status(200).send(jsonAnsAssociationMember);
  } catch (error) {
    next(error);
  }
});

router.post("/Logout", function (req, res) {
  req.session.reset(); // reset the session info --> send cookie when  req.session == undefined!!
  res.send({ success: true, message: "logout succeeded" });
});

module.exports = router;
