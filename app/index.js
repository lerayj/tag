import Sizzle from 'sizzle';
import Cookies from 'js-cookie';
import firebase from 'firebase';
import uuid from 'uuid/V1';
import email_validator from 'email-validator';
import psl from 'psl';
require('js-logger').useDefaults();

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

console.log("Env: ", process.env.NODE_ENV)
if(process.env.NODE_ENV == 'production')
    logger.setLevel(logger.OFF);

//var websiteKey = window.location.hostname.replace(/\./g, "_");
//console.log("host: ", window.location.host, " psl: ", psl.parse(window.location.host).domain, "real psl: ", psl);
//var websiteKey = psl.parse(window.location.host).domain.replace(/\./g, "_");
console.log("websiteKey: ", websiteKey);
//TEST
// var websiteKey = "villagesclubsdusoleil_com";
var websiteKey = "toto_com";

var user_ids = getCookieSession();
console.log("Session: ", user_ids.user_cookie);
getConfig(websiteKey).then((config) => {
    console.log("CONFIG: ", config);
    //saveMail(config, websiteKey, sessionId);
    chooseEmailCapture(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
    confirmSoldBasket(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
    //    window.onload = saveBasket(config, websiteKey, sessionId);
    saveBasket(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
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
function confirmSoldBasket(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    var findUrl = config.confirm_url.find((url) => currentUrl == url);
    console.log("Save to: ", 'websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId);
    if(findUrl){
        firebase.database().ref('websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId).update({converted: true});
        Cookies.remove('user_tag_id');
    }
    else
        console.log("Not Converted");
}

//Return cookie user id and the current session cookie id
function getCookieSession(){
    var user_cookie = Cookies.get('user_tag_id');

    if(user_cookie){
        console.log("Cookie user already set: ", user_cookie);
    }
    else{
        //set Cookie user for one year
        Cookies.set('user_tag_id', uuid(), { expires: 365 });
        user_cookie = Cookies.get('user_tag_id');
        console.log("Setting cookie user to: ", user_cookie);
    }
    
    var session_cookie = Cookies.get("session_id")
    
    if(session_cookie){
        console.log("session cookie id already exist");
    } else {
        console.log("Set session id");
        Cookies.set('session_id', uuid());
        session_cookie = Cookies.get('session_id');
        console.log("Setting cookie sessionto: ", user_cookie);
    }


    return {user_cookie, session_cookie};
}

function saveMail(selector, type, websiteId, userId, sessionId){
    console.log("Capture mail");
    var mail = Sizzle(selector);
    console.log("Mail: ", mail);
    if(mail.length != 0){
        var refreshIntervalId = window.setInterval(() => {
            mail = Sizzle(selector)[0].value;
            console.log("mail: ", mail, " valid: ", email_validator.validate(mail));
            if(email_validator.validate(mail)){
                console.log("Save: ", mail, " for session: ", sessionId, " on client: ", userId);
                var update = {};
                update[type] = mail;
                firebase.database().ref('websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/emails').update(update);
                setTimeout(() => { clearInterval(refreshIntervalId); }, 2000);
            }
        }, 500);
    }        
}


function chooseEmailCapture(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    if(currentUrl == config.emails.checkout.url){
        //TODO: capture checkout
        console.log("--CHECKOUT MAIL--");
        saveMail(config.emails.checkout.existing, "email_checkout_existing", websiteId, userId, sessionId);
        saveMail(config.emails.checkout.guest,  "email_checkout_guest", websiteId, userId, sessionId);
        saveMail(config.emails.checkout.new,  "email_checkout_new", websiteId, userId, sessionId);
    } else if (currentUrl == config.emails.login.url){
        //TODO: capture login
        console.log("--LOGIN MAIL--");
        saveMail(config.emails.login.selector,  "email_login", websiteId, userId, sessionId);
    } else if (currentUrl == config.emails.register.url){
        //TODO: capture register
        console.log("--REGISTER MAIL--");
        saveMail(config.emails.register.selector,  "email_register", websiteId, userId, sessionId);
    }
    //TODO: capture everywhere
    saveMail(config.emails.everywhere, "email_top_login", websiteId, userId, sessionId);
}

//TODO: Faire des règles plus générique sur les urls
//TODO: Faire la config approprié au test
function saveBasket(config, websiteId, userId, sessionId){
    console.log("config url: ", config.basket.url, " current url: ", window.location.pathname.substr(1));
    if(config.basket.url == window.location.pathname.substr(1) || 
        config.basket.url + '/' == window.location.pathname.substr(1) ){
        var total = Sizzle(config.basket.total)[0].textContent,
            product_line  = config.basket.product_line ? config.basket.product_line : "",
            linesProducts = Sizzle(config.basket.container + " " + product_line),
            updates = {},
            basket = 'websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/basket';
            console.log("linesProducts: ", linesProducts, " selector: ", config.basket.container + " " + product_line);

        var saveBasketsHandler = {hotel: saveHotelBasket, retail: saveRetailBasket};
        console.log("CHOICE: ", config.type);
        updates = saveBasketsHandler[config.type](config, basket, linesProducts, updates);
        console.log("Updates: ", updates);
        updates[basket + '/total'] = total.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
        firebase.database().ref().update(updates);
    }

}

var saveHotelBasket = function(config, basket, linesProducts, updates){
    //Test select n elem
    //config.basket.container
    console.log("=====HOTEL=====");
    var value = Sizzle(config.basket.destination, linesProducts[0]);
    console.log("Destination: ", value,  " config.basket.destination: ", config.basket.destination);
    var departure_date = attributeValue(config, 'departure_date', linesProducts[0]),
        destination = attributeValue(config, 'destination', linesProducts[0]),
        location_description = attributeValue(config, 'location_description', linesProducts[0]),
        nb_traveler = attributeValue(config, 'nb_traveler', linesProducts[0]),
        stay_time = attributeValue(config, 'stay_time', linesProducts[0]);

    updates[basket + '/departure_date'] = attributeValue(config, 'departure_date', linesProducts[0]);
    updates[basket + '/destination'] = attributeValue(config, 'destination', linesProducts[0]);
    updates[basket + '/location_description'] = attributeValue(config, 'location_description', linesProducts[0]);
    updates[basket + '/nb_traveler'] = attributeValue(config, 'nb_traveler', linesProducts[0]);
    updates[basket + '/stay_time'] = attributeValue(config, 'stay_time', linesProducts[0]);

    return updates;

}


var saveRetailBasket = function(config, basket, linesProducts, updates){
    linesProducts.forEach((line, idx) => {
        var product_id = attributeValue(config, 'product_id', line);
        logger.debug("Product_id: ", product_id);

        var product_name = attributeValue(config, 'product_name', line);
        logger.debug("Product name: ", product_name);
        if(product_name)
            updates[basket + '/products/' + product_id + '/product_name'] = product_name;

        var product_image = attributeValue(config, 'product_image', line);
        logger.debug("Product image: ", product_image);
        if(product_image)
            updates[basket + '/products/' + product_id + '/product_image'] = product_image;

        var product_price = attributeValue(config, 'product_price', line);
        logger.debug("Product price: ", product_price);
        if(product_price)
            updates[basket + '/products/' + product_id + '/product_price'] = product_price;

        var product_quantity = attributeValue(config, 'product_quantity', line);
        logger.debug("Product quantity: ", product_quantity);
        if(product_quantity)
            updates[basket + '/products/' + product_id + '/product_quantity'] = product_quantity;
        
    });
    return updates;
}




//Si l'id_product est un attribut: @selector:attribut (eg RdC: @.cartProduct:id)
function attributeValue(config, configKeyName, line){
    var configRule = config.basket[configKeyName],
        result = null;

    if(!configRule){
        console.log("[Warning] No ", configKeyName, " on config.");
        return false;
    }  
    if(configRule[0] == '@'){
        var options = configRule.substr(1).split(':');
        var selection = Sizzle(options[0], line);
        if(selection.length == 0 && Sizzle.matchesSelector(line, options[0])){
            result = line[options[1]];
        } else{
            var value = Sizzle(options[0], line)[0];

            console.log(" line: ", line, " selecteur: ", options[0], "value: ", value , "result: ", value[options[1]], );
            result = value[options[1]];  
        }

    } else{
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
