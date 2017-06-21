var admin = require('firebase-admin'),
    request = require("request");
const URL_API = "http://preprod.phoenix.wf:8042/",
    API_TOKEN = "fc4ee1ac0790871b94533ce7fad65b26bdf672ca";

module.exports = {
    getWebsiteRules: function(website){
        return new Promise(function(resolve, reject){
            admin.database().ref("websites/" + website + '/config/send_rules').once('value').then(function(snapshot) {
                console.log("snap:", snapshot.val());
                resolve(snapshot.val());
            });
        });
    },
    getSessionData: function(website, userId, sessionId){
        return new Promise(function(resolve, reject){
            admin.database().ref("websites/" + website + '/users/' + userId + '/sessions/' + sessionId).once('value').then(function(snapshot) {
                resolve(snapshot.val());
            });
        });
    },
    sendMail: function(data, session, client, mailTo, timer){
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
                admin.database().ref('websites/' + client + '/sessions/' + session).update({remarketed: true});            
            }
        });  
    }
}