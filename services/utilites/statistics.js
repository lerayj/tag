var admin = require("firebase-admin"),
    _ = require("lodash"),
    serviceAccount = require("../secrets/firebase_secret.json"),
    firebaseParams = require("../secrets/firebase_params.json");

    console.log("Initialize Firebase Admin...");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: firebaseParams.databaseURL
    });

function getClientData(client){
    return new Promise(function(resolve, reject){
        admin.database().ref('websites/'+ client + '/users/').once('value').then(function(snapshot) {
            resolve(snapshot.val());
        });        
    });
}
var results = {
    sessions: 0,
    baskets: 0,
    mailsCheckout : 0,
    mailsRegister: 0,
    mailsAny : 0,
    users: 0
};

getClientData('kiloutou_fr').then(function(users){
    _.forOwn(users, (e) => {
        results.users++;
       // console.log(users);
        //console.log("Results: ", results);
        _.forOwn(e.sessions, (session) => {
            //console.log("sessions: ", session);
            results.sessions++;
            if(session.emails){
                //console.log(session.emails);
                var mailsTypes = _.keys(session.emails);
                _.each(mailsTypes, (typeMail) => {
                    //console.log(typeMail);
                    if(typeMail.startsWith("email_checkout")){
                        results.mailsCheckout++;
                    } else if(typeMail == 'email_register'){
                        results.mailsRegister++;
                    }
                    results.mailsAny++;
                });

                if(session.basket){
                    results.baskets++;
                }
            }

        });
    });
    //console.log("Results: ", results);
    console.log(results.sessions, " sessions for ", results.users, " unique users.");
    console.log(results.mailsAny, " mails from any context.");
    console.log(results.mailsRegister, " mails from Register context.");
    console.log(results.mailsCheckout, " mails from Checkout context with ", results.baskets, " baskets collected.");
});