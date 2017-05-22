import Sizzle from 'sizzle';
import Cookies from 'js-cookie';
import firebase from 'firebase';
import uuid from 'uuid/V1';
import email_validator from 'email-validator';
import psl from 'psl';

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

//var websiteKey = window.location.hostname.replace(/\./g, "_");
//console.log("host: ", window.location.host, " psl: ", psl.parse(window.location.host).domain, "real psl: ", psl);
//var websiteKey = psl.parse(window.location.host).domain.replace(/\./g, "_");
console.log("websiteKey: ", websiteKey);

//TEST
var websiteKey = "toto_com";


var sessionId = getCookieSession();
console.log("Session: ", sessionId);
getConfig(websiteKey).then((config) => {
    console.log("CONFIG: ", config);
    saveMail(config, websiteKey, sessionId);
    confirmSoldBasket(config, websiteKey, sessionId);
    //    window.onload = saveBasket(config, websiteKey, sessionId);
    saveBasket(config, websiteKey, sessionId);
});



//Get the config for given website.
//Return Promise
function getConfig(websiteId){
    return new Promise((resolve, reject) => {
        console.log("websiteId: ", websiteId);
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
    console.log("config url: ", config.basket.url, " current url: ", window.location.pathname.substr(1));
    if(config.basket.url == window.location.pathname.substr(1) || 
        config.basket.url + '/' == window.location.pathname.substr(1) ){
        var total = Sizzle(config.basket.total)[0].textContent,
            linesProducts = Sizzle(config.basket.container + " " + config.basket.product_line),
            updates = {},
            basket = 'websites/' + websiteId + '/sessions/' + sessionId + '/basket';
            console.log("linesProducts: ", linesProducts, " selector: ", config.basket.container + " " + config.basket.product_line);
        linesProducts.forEach((line, idx) => {
            var product_id = attributeValue(config, 'product_id', line);
            console.log("Product_id: ", product_id);

            var product_name = attributeValue(config, 'product_name', line);
            console.log("Product name: ", product_name);
            updates[basket + '/products/' + product_id + '/product_name'] = product_name;

            var product_price = attributeValue(config, 'product_price', line);
            console.log("Product price: ", product_price);
            updates[basket + '/products/' + product_id + '/product_price'] = product_price;

            var product_quantity = attributeValue(config, 'product_quantity', line);
            console.log("Product quantity: ", product_quantity);
            updates[basket + '/products/' + product_id + '/product_quantity'] = product_quantity;

            //console.log("product name: ", Sizzle(config.basket.product_name, line)[0].textContent)
            //updates[basket + '/products/' + product_id + '/product_name'] = Sizzle(config.basket.product_name, line)[0].textContent.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
            
            //console.log("product price: ", Sizzle(config.basket.product_price)[0].textContent)
            //updates[basket + '/products/' + product_id + '/product_price'] = Sizzle(config.basket.product_price, line)[0].textContent.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+|\s+$/g, "");
            
            //var product_quantity = attributeValue(config, 'product_quantity', idx).replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
            //console.log("product_quantity: ", product_quantity);
            //updates[basket + '/products/' + product_id + '/product_quantity'] = product_quantity;
            
        });
        console.log("Updates: ", updates);
        updates[basket + '/total'] = total.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
        firebase.database().ref().update(updates);
    }

}

//Si l'id_product est un attribut: @selector:attribut (eg RdC: @.cartProduct:id)
function attributeValue(config, configKeyName, line){
    //console.log("IN ATTRIBUTE VALUE:", config.basket[configKeyName]);
    var configRule = config.basket[configKeyName],
        result = null;
    if(configRule[0] == '@'){
        //console.log("prod id: ", config.basket.product_id, " sub prod: ", config.basket.product_id.substr(1), " split prod: ", config.basket.product_id.substr(1).split(':'));
        var options = configRule.substr(1).split(':');
        //console.log("@ selecteur: ", options);
        
        //console.log("options[0]: ", options[0]);
        //console.log("TEST SELECT: ", Sizzle(options[0], line));
        var selection = Sizzle(options[0], line);
        if(selection.length == 0 && Sizzle.matchesSelector(line, options[0])){
            //console.log("line: ", line, " option: ", options[0] ,"NEW: ",line[options[0]]);
            //console.log("SIZZLE TEST: ", Sizzle.matchesSelector(line, options[0]));
            //console.log("PLEASE: ", line[options[1]])
            result = line[options[1]];
        } else{
            var value = Sizzle(options[0], line)[0];

            console.log(" line: ", line, " selecteur: ", options[0], "value: ", value , "result: ", value[options[1]], );
            result = value[options[1]];  
        }

    } else{
        //console.log("Regular: ", Sizzle(configRule, line)[0], " focus: ", Sizzle(configRule, line));
        result = Sizzle(configRule, line)[0].textContent;
    }
    return result.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
}

//TODO: For SAP navigation without HashChange
// window.onpopstate = function(event) {
//   console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// };

//TODO: For SAP  navigation with HashChange
//location.hash
