var admin = require("firebase-admin"),
    request = require("request"),
    init = require('./init.js'),
    trigger = require("./triggers.js"),
    rulesHandler = require("./rulesHandler.js"),
    networkHandler = require("./networkHandler.js");

const URL_API = "http://preprod.phoenix.wf:8042/",
    API_TOKEN = "fc4ee1ac0790871b94533ce7fad65b26bdf672ca";

//TODO: get the credentials certificate
// var serviceAccount = require("./firebase_secret.json");
// var firebaseParams = require("./firebase_params.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: firebaseParams.databaseURL
// });

//Get data from firebase on listener after insert or update new basket

// Get a database reference to our posts
//var db = admin.database();


function minutesToMillisec(min){
    return min * 60 * 1000;
}

exports.admin = admin;
var emailQueue = [];

trigger.startTriggers();
//TODO: Faire l'update de l'email par le tag que si on est sur du mail pour ne pas trigger plein de fois le listener

// refWebsites.on("child_added", function(snapshot) {
//     var newWebsite = snapshot.key,
//         refNewWebsite = db.ref("websites/" + newWebsite + '/users');
//     console.log("==> New Website: ", newWebsite);

//     //Listen new users on website 
//     refNewWebsite.on("child_added", function(snapshot) {
//         var sessionId = snapshot.key;
//         var sessionData = snapshot.val();
//         //console.log("==> New Session: ", sessionData, " session_id: ", sessionId);
//         if(!sessionData.retargeted){
//             //Listen if this new session have mail and basket (check update)
//             var refUpdateSession = db.ref("websites/" + newWebsite + '/users/' + sessionId);
//             refUpdateSession.on("child_changed", function(snapshot) {
//                 console.log("=====basket updated=========");
//                 //console.log("snap key: ", snapshot.key, "snap val: ", snapshot.val());
                
//                 var promRules = getWebsiteRules(newWebsite),
//                     promSessionData = getSessionData(newWebsite, sessionId);

//                 Promise.all([promRules, promSessionData]).then(function(values){
//                     var rules = values[0],
//                         sessionData = values[1];
//                     console.log("==READY TO CHECK==");
//                     //Si l'update viens du mail et qu'il y a un basket ou Si l'update viens d'un basket et il y a un mail
//                     if((chooseEmail(sessionData.emails) && sendRulesAccepted(sessionData.basket))){
//                         //TODO: Push to queue
//                         //Pour le moment pas de queue, juste un set interval
//                         //console.log("DATA TO SEND: ", sessionData);
//                         var timer = undefined
//                         if(rules == null || rules.delay == null)
//                             timer = 1800000;
//                         timer = minutesToMillisec(rules.delay);
//                         //TEST
//                         timer = 3000;
//                         //ENDTEST
//                         var timeout = setTimeout(sendMail.bind(this, sessionData, sessionId, newWebsite, chooseEmail(sessionData.emails)), timer);
//                         emailQueue.push(timeout);
//                     }
//                 })
//             }, function (errorObject) {
//                 console.log("The read failed: " + errorObject.code);
//             });
//         }
//     });
// });

// function startTriggers(){
//     refWebsites.on("child_added", function(snapshot) {
//         var newWebsite = snapshot.key,
//             refNewUsers = db.ref("websites/" + newWebsite + '/users');

//         console.log("=> New Website: ", newWebsite);
//         onNewUser(refNewUsers, newWebsite);
//     });
// }

// function onNewUser(refUsers, websiteId){

//     refUsers.on("child_added", function(snapshot) {
//         var userId = snapshot.key,
//             userData = snapshot.val();
//             refNewSessions = refUsers.child(userId).child('sessions');
//         console.log("===> New user: ", userId);
//         onNewSession(refNewSessions, websiteId, userId);
//     });
// }

// function onNewSession(refNewSessions, websiteId, userId){
//     refNewSessions.on("child_added", function(snapshot) {
//         var sessionId = snapshot.key,
//             sessionData = snapshot.val();
//             refNewSession = refNewSessions.child(sessionId);

//         console.log("=====> New session: ", sessionId);
//         onUpdateSession(refNewSession, websiteId, userId, sessionId);
//     });

// }

// function onUpdateSession(refSession, websiteId, userId, sessionId){
//       refSession.on("child_changed", function(snapshot) {
        
//         var promRules = networkHandler.getWebsiteRules(websiteId),
//             promSessionData = networkHandler.getSessionData(websiteId, sessionId);

//         Promise.all([promRules, promSessionData]).then(function(values){
//             var rules = values[0],
//                 sessionData = values[1];
//             console.log("==READY TO CHECK==");
//             //Si l'update viens du mail et qu'il y a un basket ou Si l'update viens d'un basket et il y a un mail
//             if((rulesHandler.chooseEmail(sessionData.emails) && rulesHandler.sendRulesAccepted(sessionData.basket))){
//                 var timer = undefined
//                 if(rules == null || rules.delay == null)
//                     timer = 1800000;
//                 timer = minutesToMillisec(rules.delay);
//                 //TEST
//                 timer = 3000;
//                 //ENDTEST
//                 var timeout = setTimeout(sendMail.bind(this, sessionData, sessionId, websiteId, rulesHandler.chooseEmail(sessionData.emails)), timer);
//                 emailQueue.push(timeout);
//             }
//         });
//     });  
// }