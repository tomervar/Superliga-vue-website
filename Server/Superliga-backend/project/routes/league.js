var express = require("express");
var router = express.Router();
const league_utils = require("./utils/league_utils");


/**
 * This path gets all league details 
 */
router.get("/getDetails", async (req, res, next) => {
  try {
    const league_details = await league_utils.getLeagueDetails();
    res.status(200).send(league_details);
  } catch (error) {
    next(error);
  }
});


/**
 * This path gets body  all stage matches (all matches in DB)
 */
router.get("/getStageMatches", async (req, res, next) => {
  try {
    const league_matches = await league_utils.getStageMatches();
    res.status(200).send(league_matches);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
