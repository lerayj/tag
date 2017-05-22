var admin = require("firebase-admin");
    // kue = require('kue'),
    // queue = kue.createQueue();

//TODO: get the credentials certificate
var serviceAccount = require("./firebase_secret.json");
var firebaseParams = require("./firebase_params.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: firebaseParams.databaseURL
});

//Get data from firebase on listener after insert or update new basket

// Get a database reference to our posts
var db = admin.database();
var refWebsites = db.ref("websites");

// Attach an asynchronous callback to read the data at our posts reference
// ref.on("child_changed", function(snapshot) {
//     console.log("=====child_changed=========");
//     console.log("snap: ", snapshot.val());
// }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });



//TODO: Faire l'update de l'email par le tag que si on est sur du mail pour ne pas trigger plein de fois le listener

refWebsites.on("child_added", function(snapshot) {
    var newWebsite = snapshot.key,
        refNewWebsite = db.ref("websites/" + newWebsite + '/sessions');
    console.log("==> New Website: ", newWebsite);

    //Listen new new session on website 
    refNewWebsite.on("child_added", function(snapshot) {
        var sessionId = snapshot.key;
        var sessionData = snapshot.val();
        console.log("==> New Session: ", sessionData, " session_id: ", sessionId);
        if(!sessionData.retargeted){
            //Listen if this new session have mail and basket (check update)
            var refUpdateSession = db.ref("websites/" + newWebsite + '/sessions/' + sessionId);
            refUpdateSession.on("child_changed", function(snapshot) {
                console.log("=====basket updated=========");
                console.log("snap key: ", snapshot.key, "snap val: ", snapshot.val());
                
                var promRules = getWebsiteRules(newWebsite),
                    promSessionData = getSessionData(newWebsite, sessionId);

                Promise.all([promRules, promSessionData]).then(function(values){
                    var rules = values[0],
                        sessionData = values[1];

                    //Si l'update viens du mail et qu'il y a un basket ou Si l'update viens d'un basket et il y a un mail
                    if((sessionData.email && sendRulesAccepted(sessionData.basket))){
                        //TODO: Push to queue
                    }
                })
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }
    });
});

//Check if the rules are completed
function sendRulesAccepted(basket, rules){
    console.log("BASKET: ", basket);
    return true;
}

//get rules for a website.
//Return a Promise
function getWebsiteRules(website){
    return new Promise(function(resolve, reject){
        admin.database().ref("websites/" + website + '/send_rules').once('value').then(function(snapshot) {
            resolve(snapshot.val());
        });
    });
}

function getSessionData(website, sessionId){
    return new Promise(function(resolve, reject){
        admin.database().ref("websites/" + website + '/sessions/' + sessionId).once('value').then(function(snapshot) {
            resolve(snapshot.val());
        });
    });
}


//TODO: On new session with email and basket, add to Kue

// var email = queue.create('email', {
//     title: 'Account renewal required'
//   , to: 'tj@learnboost.com'
//   , template: 'renewal-email'
// }).delay(milliseconds)
//   .priority('high')
//   .save(function(err){
//    if( !err ) console.log( job.id );
// });


// queue.process('email',  20, function(job, done){
//   email(job.data.to, done);
// });

// function email(address, done) {
//   if(!isValidEmail(address)) {
//     //done('invalid to address') is possible but discouraged
//     return done(new Error('invalid to address'));
//   }
//   // email send stuff...
//   done();
// }