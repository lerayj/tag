var admin = require("firebase-admin"),
    request = require("request"),
    kue = require('kue'),
    queue = kue.createQueue({
        redis: 'redis://toto@redis-14773.c3.eu-west-1-2.ec2.cloud.redislabs.com:14773'
    });

const URL_API = "http://preprod.phoenix.wf/",
    API_TOKEN = "fc4ee1ac0790871b94533ce7fad65b26bdf672ca";

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

function minutesToMillisec(min){
    return min * 60 * 1000;
}


var emailQueue = [];
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
                //console.log("snap key: ", snapshot.key, "snap val: ", snapshot.val());
                
                var promRules = getWebsiteRules(newWebsite),
                    promSessionData = getSessionData(newWebsite, sessionId);

                Promise.all([promRules, promSessionData]).then(function(values){
                    var rules = values[0],
                        sessionData = values[1];
                    console.log("==READY TO CHECK==");
                    //console.log("Ruels: ", rules);
                    //console.log("sessionDATA: ", sessionData);
                    //Si l'update viens du mail et qu'il y a un basket ou Si l'update viens d'un basket et il y a un mail
                    if((chooseEmail(sessionData.emails) && sendRulesAccepted(sessionData.basket))){
                        //TODO: Push to queue
                        //Pour le moment pas de queue, juste un set interval
                        //console.log("DATA TO SEND: ", sessionData);
                        var timer = undefined
                        if(rules == null || rules.delay == null)
                            timer = 1800000;
                        timer = minutesToMillisec(rules.delay);
                        //TEST
                        timer = 3000;
                        //ENDTEST
                        var timeout = setTimeout(sendMail.bind(this, sessionData, sessionId, newWebsite, chooseEmail(sessionData.emails)), timer);
                        emailQueue.push(timeout);
                    }
                })
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }
    });
});


    
//TODO: Prioritize mail
function chooseEmail(emails){
    const MAIL_PRIORITY = ["email_checkout_new", "email_checkout_existing", "email_checkout_guest"];
    //console.log("=======>EMAILS: ", emails);
    return emails.email_checkout_existing;

}

//Check if the rules are completed
function sendRulesAccepted(basket, rules){
    //console.log("BASKET: ", basket);

    //CHECK si un mail a deja été envoyé pour cette session
    var minBasket = 0,
        maxBasket = 10;
    if(rules.min_product_quantity != null)
        minBasket = rules.min_product_quantity;
    if(rules.product_quantity != null)
        maxBasket = rules.product_quantity;

    return basket != null && basket.products != null && basket.products.length > minBasket && basket.products.length <= maxBasket
}

//get rules for a website.
//Return a Promise
function getWebsiteRules(website){
    return new Promise(function(resolve, reject){
        admin.database().ref("websites/" + website + '/config/send_rules').once('value').then(function(snapshot) {
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

function sendMail(data, session, client, mailTo, timer){
    console.log("==SEND MAIL==");
    var toSend = {sessions: {}};
    toSend.sessions[session] = data;
    toSend.sessions[session].email = mailTo;
    toSend.sessions[session].client = client;
    toSend.sessions[session].command = "send";
    

    //console.log("FINAL SEND: ", toSend);
    var headers = {"api-key":"fc4ee1ac0790871b94533ce7fad65b26bdf672ca"};
    request({method: "POST", uri: URL_API + "alpha/api/retargeting/data", json: true, body: toSend, headers}, function(err, res){
        if(err)
            console.log("Error: ", err);
        else{
            console.log("Send OK");
            firebase.database().ref('websites/' + client + '/sessions/' + session).update({remarketed: true});            
        }
    });
}