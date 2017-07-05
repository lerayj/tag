import Sizzle from 'sizzle';
import firebase from 'firebase';
import email_validator from 'email-validator';
import psl from 'psl';
import * as log from 'loglevel';

import Select from './selectionHelpers.js';
import Cookies from './cookiesHandler.js';

var config = {
    apiKey: "AIzaSyDbYDeR_xY5rGkJBkWv9w1Wof1D5i-SWpo",
    authDomain: "tagmanager-52752.firebaseapp.com",
    databaseURL: "https://tagmanager-52752.firebaseio.com",
    projectId: "tagmanager-52752",
    storageBucket: "tagmanager-52752.appspot.com",
    messagingSenderId: "998790286873"
  };

function runCore(){
    firebase.initializeApp(config);
    var database = firebase.database();

    //var websiteKey = window.location.hostname.replace(/\./g, "_");
    //console.log("host: ", window.location.host, " psl: ", psl.parse(window.location.host).domain, "real psl: ", psl);
    var websiteKey = psl.parse(window.location.host).domain.replace(/\./g, "_");
    //var websiteKey = "toto_com";

    var user_ids = Cookies.getCookieSession();

    getConfig(websiteKey).then((config) => {
        console.log("CONFIG: ", config);
        if(!config.debug)
            log.setLevel(log.levels.SILENT);
        else
            log.setLevel(log.levels.INFO);
        //Local test
        if(config.live){
            log.setLevel(log.levels.INFO);
            log.info("[DEBUG] Client: ", websiteKey);
            chooseEmailCapture(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
            saveUserInfo(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie)
            confirmSoldBasket(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie);
            saveBasket(config, websiteKey, user_ids.user_cookie, user_ids.session_cookie); 
        } else
            log.info("[DEBUG] Client disabled. Pass the option config 'live' to true to go live.");
    });
}


// //Get the config for given website.
// //Return Promise
function getConfig(websiteId){
    var storageConfig = JSON.parse(localStorage.getItem('config_tag_website'));
    console.log("STorage: ", storageConfig);
    if(storageConfig)
        return new Promise((resolve) => {resolve(storageConfig)});
    
    console.log("Fetching config from server...");
    return new Promise((resolve, reject) => {
        var conf = firebase.database().ref('websites/' + websiteId + '/config');
        conf.on('value', (snapshot) => {
            if(!storageConfig){
                console.log("Setting storage");
                localStorage.setItem('config_tag_website', JSON.stringify(snapshot.val()));
            }
            resolve(snapshot.val());
        });
    });
}

function chooseEmailCapture(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    if(currentUrl == config.emails.checkout.url){
        log.info("[DEBUG] Searching for checkout email to capture");
        saveMail(config.emails.checkout.existing, "email_checkout_existing", websiteId, userId, sessionId);
        saveMail(config.emails.checkout.guest,  "email_checkout_guest", websiteId, userId, sessionId);
        saveMail(config.emails.checkout.new,  "email_checkout_new", websiteId, userId, sessionId);
    } else if (currentUrl == config.emails.login.url){
        log.info("[DEBUG] Searching for login email to capture");
        saveMail(config.emails.login.selector,  "email_login", websiteId, userId, sessionId);
    } else if (currentUrl == config.emails.register.url){
        log.info("[DEBUG] Searching for register email to capture");
        saveMail(config.emails.register.selector,  "email_register", websiteId, userId, sessionId);
    }
    log.info("[DEBUG] Searching for top-login email to capture");
    saveMail(config.emails.everywhere, "email_top_login", websiteId, userId, sessionId);
}

function saveMail(selector, type, websiteId, userId, sessionId){
    var mail = Sizzle(selector);
    if(mail.length != 0){
        var refreshIntervalId = window.setInterval(() => {
            mail = Sizzle(selector)[0].value;
            if(email_validator.validate(mail)){
                log.info("[DEBUG] Saving ", mail, " as type: ", type);
                var update = {};
                update['value'] = mail;
                update['saved_at'] = firebase.database.ServerValue.TIMESTAMP;
                firebase.database().ref('websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/emails/' + type).update(update);
                setTimeout(() => { clearInterval(refreshIntervalId); }, 2000);
            }
        }, 500);
    }        
}

function saveUserInfo(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    if(currentUrl == config.user_infos.url){
        log.info("[DEBUG] Searching for user infos to capture");

        var user_infos = 'websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/user_infos';
        Sizzle(config.user_infos["firstname"])[0].addEventListener("input", function (e) {
            firebase.database().ref(user_infos).update({"firstname": this.value});
        });

        Sizzle(config.user_infos["lastname"])[0].addEventListener("input", function (e) {
            firebase.database().ref(user_infos).update({"lastname": this.value});
        });


        Select.selectValueAttrHandler(config.user_infos, 'civility', Sizzle("body")[0], (result)=>{
            firebase.database().ref(user_infos).update({"civility": result});
        });
    }
}

//TODO: Faire des règles plus générique sur les urls
//TODO: Faire la config approprié au test
function saveBasket(config, websiteId, userId, sessionId){
    if(config.basket.url == window.location.pathname.substr(1) || 
        config.basket.url + '/' == window.location.pathname.substr(1) ){
        log.info("[DEBUG] Searching for basket to capture");
        var total = Sizzle(config.basket.total)[0].textContent,
            product_line  = config.basket.product_line ? config.basket.product_line : "",
            linesProducts = Sizzle(config.basket.container + " " + product_line),
            updates = {},
            basket = 'websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/basket';
        var saveBasketsHandler = {hotel: saveHotelBasket, retail: saveRetailBasket};
        updates = saveBasketsHandler[config.type](config, basket, linesProducts, updates);
        updates[basket + '/total'] = total.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
        log.info("[DEBUG] Saving basket: ", updates);
        updates['websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId + '/saved_at'] = firebase.database.ServerValue.TIMESTAMP;
        firebase.database().ref().update(updates);
    }
}

var saveHotelBasket = function(config, basket, linesProducts, updates){
    var value = Sizzle(config.basket.destination, linesProducts[0]),
        departure_date = Select.attributeValue(config.basket, 'departure_date', linesProducts[0]),
        destination = Select.attributeValue(config.basket, 'destination', linesProducts[0]),
        location_description = Select.attributeValue(config.basket, 'location_description', linesProducts[0]),
        nb_traveler = Select.attributeValue(config.basket, 'nb_traveler', linesProducts[0]),
        stay_time = Select.attributeValue(config.basket, 'stay_time', linesProducts[0]);

    updates[basket + '/departure_date'] = Select.attributeValue(config.basket, 'departure_date', linesProducts[0]);
    updates[basket + '/destination'] = Select.attributeValue(config.basket, 'destination', linesProducts[0]);
    updates[basket + '/location_description'] = Select.attributeValue(config.basket, 'location_description', linesProducts[0]);
    updates[basket + '/nb_traveler'] = Select.attributeValue(config.basket, 'nb_traveler', linesProducts[0]);
    updates[basket + '/stay_time'] = Select.attributeValue(config.basket, 'stay_time', linesProducts[0]);

    return updates;

}

//TODO: improvement refacto faire une config de field a select
var saveRetailBasket = function(config, basket, linesProducts, updates){
    linesProducts.forEach((line, idx) => {
        log.info("[DEBUG] Capturing product number: ", idx);
        var product_id = Select.attributeValue(config.basket, 'product_id', line);
        log.info("==>[DEBUG] Capturing Product_id: ", product_id);
        if(product_id){
            var product_name = Select.attributeValue(config.basket, 'product_name', line);
            log.info("==>[DEBUG] Product name: ", product_name);
            if(product_name)
                updates[basket + '/products/' + product_id + '/product_name'] = product_name;

            var product_image = Select.attributeValue(config.basket, 'product_image', line);
            log.info("==>[DEBUG] Product image: ", product_image);
            if(product_image)
                updates[basket + '/products/' + product_id + '/product_image'] = product_image;

            var product_price = Select.attributeValue(config.basket, 'product_price', line);
            log.info("==>[DEBUG] Product price: ", product_price);
            if(product_price)
                updates[basket + '/products/' + product_id + '/product_price'] = product_price;

            var product_quantity = Select.attributeValue(config.basket, 'product_quantity', line);
            log.info("==>[DEBUG] Product quantity: ", product_quantity);
            if(product_quantity)
                updates[basket + '/products/' + product_id + '/product_quantity'] = product_quantity;  
        }

        
    });
    return updates;
}

//TODO: Faire des règles plus générique sur les urls
function confirmSoldBasket(config, websiteId, userId, sessionId){
    var currentUrl = window.location.pathname.substr(1);
    var findUrl = config.confirm_url.find((url) => currentUrl == url);
    if(findUrl){
        firebase.database().ref('websites/' + websiteId + '/users/' + userId + '/sessions/' + sessionId).update({converted: true});
        //TODO: handle le cookie sur un panier vendu
        Cookies.removeCookie('session_id');
    }
    else
        log.info("[DEBUG] Not Converted");
}

export { runCore };
//TODO: For SAP navigation without HashChange
// window.onpopstate = function(event) {
//   console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// };

//TODO: For SAP  navigation with HashChange
//location.hash
