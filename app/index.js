import Sizzle from 'sizzle';
import Cookies from 'js-cookie';
import firebase from 'firebase';
import uuid from 'uuid/V1';
import email_validator from 'email-validator';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbYDeR_xY5rGkJBkWv9w1Wof1D5i-SWpo",
    authDomain: "tagmanager-52752.firebaseapp.com",
    databaseURL: "https://tagmanager-52752.firebaseio.com",
    projectId: "tagmanager-52752",
    storageBucket: "tagmanager-52752.appspot.com",
    messagingSenderId: "998790286873"
  };
firebase.initializeApp(config);

var database = firebase.database();

var websiteKey = window.location.hostname.replace(/\./g, "_");
console.log("websiteKey: ", websiteKey);

//TEST
websiteKey = "toto_com";


var sessionId = getCookieSession();
console.log("Session: ", sessionId);
getConfig(websiteKey).then((config) => {
    console.log("CONFIG: ", config);
    saveMail(config, websiteKey, sessionId);
    confirmSoldBasket(config, websiteKey, sessionId);
    window.onload = saveBasket(config, websiteKey, sessionId);
});



//Get the config for given website.
//Return Promise
function getConfig(websiteId){
    return new Promise((resolve, reject) => {
        var conf = firebase.database().ref('websites/' + websiteId + '/config');
        conf.on('value', snapshot => resolve(snapshot.val()));
    });
}

//TODO: Faire des règles plus générique sur les urls
function confirmSoldBasket(config, websiteId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    var findUrl = config.confirm_url.find((url) => currentUrl == url);
    console.log("Save to: ", 'websites/' + websiteId + '/sessions/' + sessionId);
    if(findUrl){
        firebase.database().ref('websites/' + websiteId + '/sessions/' + sessionId).update({converted: true});
        Cookies.remove('user_tag_id');
    }
    else
        console.log("Not Converted");
}

function getCookieSession(){
    var cookie = Cookies.get('user_tag_id');
    if(cookie){
        console.log("Cookie already set: ", cookie);
    }
    else{
        Cookies.set('user_tag_id', uuid());
        cookie = Cookies.get('user_tag_id');
        console.log("Setting cookie to: ", cookie);
    }
    return cookie;
}

function saveMail(config, websiteId, sessionId){
    console.log("Capture mail");
    var mail = Sizzle(config.email);
    console.log("Mail: ", mail);
    if(mail.length != 0){
        var refreshIntervalId = window.setInterval(() => {
            mail = Sizzle(config.email)[0].value;
            console.log("mail: ", mail, " valid: ", email_validator.validate(mail));
            if(email_validator.validate(mail)){
                console.log("Save: ", mail, " for session: ", sessionId);
                firebase.database().ref('websites/' + websiteId + '/sessions/' + sessionId).update({email: mail});
                setTimeout(() => { clearInterval(refreshIntervalId); }, 2000);
            }
        }, 500);
    }        
}

//TODO: Faire des règles plus générique sur les urls
//TODO: Faire la config approprié au test
function saveBasket(config, websiteId, sessionId){
    if(config.basket.url == window.location.pathname.substr(1)){
        var total = Sizzle(config.basket.total)[0].textContent,
            linesProducts = Sizzle(config.basket.container + " " + config.basket.product_line),
            updates = {},
            basket = 'websites/' + websiteId + '/sessions/' + sessionId + '/basket';

        linesProducts.forEach((line, idx) => {
            var product_id = Sizzle(config.basket.product_id)[idx].textContent;
            updates[basket + '/products/' + product_id + '/product_name'] = Sizzle(config.basket.product_name)[0].textContent;
            updates[basket + '/products/' + product_id + '/product_price'] = Sizzle(config.basket.product_price)[0].textContent;
            updates[basket + '/products/' + product_id + '/product_quantity'] = Sizzle(config.basket.product_quantity)[0].textContent;
            
        });
        console.log("Updates: ", updates);
        updates[basket + '/total'] = total;
        firebase.database().ref().update(updates);
    }

}

//TODO: For SAP navigation without HashChange
// window.onpopstate = function(event) {
//   console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// };

//TODO: For SAP  navigation with HashChange
//location.hash
