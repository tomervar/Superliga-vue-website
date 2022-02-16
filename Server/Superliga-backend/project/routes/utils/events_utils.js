const DButils = require("./DButils");
const axios = require("axios");
const match_utils = require("./match_utils");


/*
this function will add an Event to a match
*/
async function addEventToMatch(match_id,event){
    let date = event.event_date;
    let time = event.event_time;
    let minute = event.minute;
    let game_event = event.game_event;
    await DButils.execQuery(
        `insert into dbo.Events (event_date, event_time, minute, game_event , MatchId) 
        values ('${date}', '${time}','${minute}','${game_event}','${match_id}')`
    );
}

/*
this function will get the eventCalender of a match that given
*/
async function getAllMatchEvents(match_id){
    const eventCalender = [];
    const events = await DButils.execQuery(`SELECT * FROM dbo.Events where MatchId='${match_id}'`);
    for(const event of events){
        // turn all event to json
        let time = await match_utils.geTimeFromDateTime(event.event_time);
        let date = await match_utils.getDateFromDateTime(event.event_date);
        let event_json = {
            event_date:date,
            event_time:time,
            minute:event.minute,
            game_event:event.game_event 
        };
        eventCalender.push(event_json);
    }
    return eventCalender;
}

exports.getAllMatchEvents = getAllMatchEvents;
exports.addEventToMatch = addEventToMatch;