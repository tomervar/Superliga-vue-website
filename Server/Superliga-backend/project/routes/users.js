var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const users_utils = require("./utils/users_utils");
const players_utils = require("./utils/players_utils");
const match_utils = require("./utils/match_utils");

/**
 * Authenticate all incoming requests by middleware
 */
router.use(async function (req, res, next) {
  if (req.session && req.session.user_id) {
    DButils.execQuery("SELECT user_id FROM dbo.users")
      .then((users) => {
        if (users.find((x) => x.user_id === req.session.user_id)) {
          req.user_id = req.session.user_id;
          next();
        }
      })
      .catch((err) => next(err));
  } else {
    res.sendStatus(401);
  }
});

//
const association_Member = require("./associationMember");
router.use("/associationMember", association_Member);
const favorite = require("./favorite");
router.use("/favorite", favorite);


// /**
//  * This path gets body with team_id and save this team in the favorites list of the logged-in user
//  */
// router.post("/favoriteTeam", async (req, res, next) => {
//   try {
//     const user_id = req.session.user_id;
//     const team_id = req.body.team_id;
//     await users_utils.markTeamAsFavorite(user_id, team_id);
//     res.status(201).send("The team successfully saved as favorite");
//   } catch (error) {
//     next(error);
//   }
// });

// /**
//  * This path returns the favorites teams that were saved by the logged-in user
//  */
// router.get("/favoriteTeam", async (req, res, next) => {
//   try {
//     const user_id = req.session.user_id;
//     let favorite_teams = {};
//     const team_ids = await users_utils.getFavoriteTeams(user_id);
//     let team_ids_array = [];
//     team_ids.map((element) => team_ids_array.push(element.team_id)); //extracting the team ids into array
//     const results = await teams_utils.getteamsInfo(team_ids_array);
//     res.status(200).send(results);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
