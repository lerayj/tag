var admin = require('firebase-admin'),
    rulesHandler = require("./rulesHandler.js"),
    networkHandler = require("./networkHandler.js");

var emailQueue = [];

exports.startTriggers = function(){
    var db = admin.database();
    var refWebsites = db.ref("websites");

    refWebsites.on("child_added", function(snapshot) {
        var newWebsite = snapshot.key,
            refNewUsers = db.ref("websites/" + newWebsite + '/users');

        console.log("=> New Website: ", newWebsite);
        onNewUser(refNewUsers, newWebsite);
    });
}

function onNewUser(refUsers, websiteId){

    refUsers.on("child_added", function(snapshot) {
        var userId = snapshot.key,
            userData = snapshot.val();
            refNewSessions = refUsers.child(userId).child('sessions');
        console.log("===> New user: ", userId);
        onNewSession(refNewSessions, websiteId, userId);
    });
}

function onNewSession(refNewSessions, websiteId, userId){
    refNewSessions.on("child_added", function(snapshot) {
        var sessionId = snapshot.key,
            sessionData = snapshot.val();
            refNewSession = refNewSessions.child(sessionId);

        console.log("=====> New session: ", sessionId);
        onUpdateSession(refNewSession, websiteId, userId, sessionId);
    });

}

function onUpdateSession(refSession, websiteId, userId, sessionId){
      refSession.on("child_changed", function(snapshot) {
        
        var promRules = networkHandler.getWebsiteRules(websiteId),
            promSessionData = networkHandler.getSessionData(websiteId, userId, sessionId);

        Promise.all([promRules, promSessionData]).then(function(values){
            var rules = values[0],
                sessionData = values[1];
            console.log("==READY TO CHECK==");
            console.log("Session DATA: ", sessionData);
            //Si l'update viens du mail et qu'il y a un basket ou Si l'update viens d'un basket et il y a un mail
            if((rulesHandler.chooseEmail(sessionData.emails) && rulesHandler.sendRulesAccepted(sessionData.basket, rules))){
                var timer = undefined
                if(rules == null || rules.delay == null)
                    timer = 1800000;
                timer = minutesToMillisec(rules.delay);
                //TEST
                timer = 3000;
                //ENDTEST
                console.log("ADDING TO SEND QUEUE");
                var timeout = setTimeout(networkHandler.sendMail.bind(this, sessionData, sessionId, websiteId, rulesHandler.chooseEmail(sessionData.emails)), timer);
                emailQueue.push(timeout);
            }
        });
    });  
}

function minutesToMillisec(min){
    return min * 60 * 1000;
}