import Sizzle from 'sizzle';
import Cookies from 'js-cookie';
import firebase from 'firebase';
import uuid from 'uuid/V1';
import email_validator from 'email-validator';
import psl from 'psl';
require('js-logger').useDefaults();

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
var websiteKey = "toto_com";

var user_ids = getCookieSession();

getConfig(websiteKey).then((config) => {
    if(!config.debug){
        logger.setLevel(logger.OFF);
    }
    logger.debug("[DEBUG] Client: ", websiteKey);
    chooseEmailCapture(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
    confirmSoldBasket(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
    saveBasket(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
});

//Get the config for given website.
//Return Promise
function getConfig(websiteId){
    return new Promise((resolve, reject) => {
        var conf = firebase.database().ref('websites/' + websiteId + '/config');
        conf.on('value', snapshot => resolve(snapshot.val()));
    });
}

//Return cookie user id and the current session cookie id
function getCookieSession(){
    var user_cookie = setCookies('user_tag_id', {expires: 365}),
        session_cookie = setCookies('session_id');

    return {user_cookie, session_cookie};
}

function setCookies(cookieName, cookieSettings){
    var cookie = Cookies.get(cookieName);
    
    if(cookie){
        logger.debug("[DEBUG] Cookie ", cookieName, " already exists: ", cookie);
    } else {
        Cookies.set(cookieName, uuid());
        cookie = Cookies.get(cookieName);
        logger.debug("[DEBUG] Cookie ", cookieName, " set to: ", cookie);
    }
    return cookie;
}

function chooseEmailCapture(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    if(currentUrl == config.emails.checkout.url){
        logger.debug("[DEBUG] Searching for checkout email to capture");
        saveMail(config.emails.checkout.existing, "email_checkout_existing", websiteId, userId, sessionId);
        saveMail(config.emails.checkout.guest,  "email_checkout_guest", websiteId, userId, sessionId);
        saveMail(config.emails.checkout.new,  "email_checkout_new", websiteId, userId, sessionId);
    } else if (currentUrl == config.emails.login.url){
        logger.debug("[DEBUG] Searching for login email to capture");
        saveMail(config.emails.login.selector,  "email_login", websiteId, userId, sessionId);
    } else if (currentUrl == config.emails.register.url){
        logger.debug("[DEBUG] Searching for register email to capture");
        saveMail(config.emails.register.selector,  "email_register", websiteId, userId, sessionId);
    }
    logger.debug("[DEBUG] Searching for top-login email to capture");
    saveMail(config.emails.everywhere, "email_top_login", websiteId, userId, sessionId);
}

function saveMail(selector, type, websiteId, userId, sessionId){
    var mail = Sizzle(selector);
    if(mail.length != 0){
        var refreshIntervalId = window.setInterval(() => {
            mail = Sizzle(selector)[0].value;
            if(email_validator.validate(mail)){
                logger.debug("[DEBUG] Saving ", mail, " as type: ", type);
                var update = {};
                update[type] = mail;
                firebase.database().ref('websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/emails').update(update);
                setTimeout(() => { clearInterval(refreshIntervalId); }, 2000);
            }
        }, 500);
    }        
}

function saveUserInfo(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    if(currentUrl == config.user_infos.url){
        logger.debug("[DEBUG] Searching for user infos to capture");
        var civility = attributeValue(config, 'civility', line),
            firstName = attributeValue(config, 'product_name', line),
            lastName = attributeValue(config, 'product_name', line);

        var user_infos = websiteId + '/users/' + userId + '/' + sessionId + '/user_infos';

        updates[ user_infos + '/civility'] = civility;
        updates[ user_infos + '/firstname'] = firstName;
        updates[ user_infos + '/lastname'] = lastName;
        return updates;
    }
}

//TODO: Faire des règles plus générique sur les urls
//TODO: Faire la config approprié au test
function saveBasket(config, websiteId, userId, sessionId){
    if(config.basket.url == window.location.pathname.substr(1) || 
        config.basket.url + '/' == window.location.pathname.substr(1) ){
        logger.debug("[DEBUG] Searching for basket to capture");
        var total = Sizzle(config.basket.total)[0].textContent,
            product_line  = config.basket.product_line ? config.basket.product_line : "",
            linesProducts = Sizzle(config.basket.container + " " + product_line),
            updates = {},
            basket = 'websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/basket';

        var saveBasketsHandler = {hotel: saveHotelBasket, retail: saveRetailBasket};
        updates = saveBasketsHandler[config.type](config, basket, linesProducts, updates);
        updates[basket + '/total'] = total.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
        logger.debug("[DEBUG] Saving basket: ", updates);
        firebase.database().ref().update(updates);
    }
}

var saveHotelBasket = function(config, basket, linesProducts, updates){
    var value = Sizzle(config.basket.destination, linesProducts[0]),
        departure_date = attributeValue(config, 'departure_date', linesProducts[0]),
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

//TODO: improvement refacto faire une config de field a select
var saveRetailBasket = function(config, basket, linesProducts, updates){
    linesProducts.forEach((line, idx) => {
        logger.debug("[DEBUG] Capturing product number: ", idx);
        var product_id = attributeValue(config, 'product_id', line);
        logger.debug("==>[DEBUG] Capturing Product_id: ", product_id);

        var product_name = attributeValue(config, 'product_name', line);
        logger.debug("==>[DEBUG] Product name: ", product_name);
        if(product_name)
            updates[basket + '/products/' + product_id + '/product_name'] = product_name;

        var product_image = attributeValue(config, 'product_image', line);
        logger.debug("==>[DEBUG] Product image: ", product_image);
        if(product_image)
            updates[basket + '/products/' + product_id + '/product_image'] = product_image;

        var product_price = attributeValue(config, 'product_price', line);
        logger.debug("==>[DEBUG] Product price: ", product_price);
        if(product_price)
            updates[basket + '/products/' + product_id + '/product_price'] = product_price;

        var product_quantity = attributeValue(config, 'product_quantity', line);
        logger.debug("==>[DEBUG] Product quantity: ", product_quantity);
        if(product_quantity)
            updates[basket + '/products/' + product_id + '/product_quantity'] = product_quantity;
        
    });
    return updates;
}

//TODO: Faire des règles plus générique sur les urls
function confirmSoldBasket(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    var findUrl = config.confirm_url.find((url) => currentUrl == url);
    if(findUrl){
        firebase.database().ref('websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId).update({converted: true});
        Cookies.remove('user_tag_id');
    }
    else
        logger.debug("[DEBUG] Not Converted");
}

//Si l'id_product est un attribut: @selector:attribut (eg RdC: @.cartProduct:id)
function attributeValue(config, configKeyName, line){
    var configRule = config.basket[configKeyName],
        result = null;

    if(!configRule){
        logger.warn("[WARNING] No ", configKeyName, " on config.");
        return false;
    }  
    if(configRule[0] == '@'){
        var options = configRule.substr(1).split(':');
        var selection = Sizzle(options[0], line);
        if(selection.length == 0 && Sizzle.matchesSelector(line, options[0])){
            result = line[options[1]];
        } else{
            var value = Sizzle(options[0], line)[0];

            console.log(" line: ", line, " selecteur: ", options[0], "value: ", value , "result: ", value[options[1]]);
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
