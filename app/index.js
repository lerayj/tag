import Sizzle from 'sizzle';
import Cookies from 'js-cookie';
import firebase from 'firebase';
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

getConfig(websiteKey).then((config) => {
    console.log("CONFIG: ", config);
});

//Get the config for given website.
//Return Promise
function getConfig(websiteId){
    return new Promise((resolve, reject) => {
        var conf = firebase.database().ref('websites/' + websiteId + '/config');
        conf.on('value', snapshot => resolve(snapshot.val()));
    });
}






//writeUserData("123", "toto", "toto@gmail.com");



// var truc = Sizzle("#test");
// console.log("TOTO: ", truc);
// Cookies.set('name', 'toto');

//var cookie = getCookieSession();



function getCookieSession(){
    var cookie = Cookies.get('name');
    if(cookie)
        console.log("Cookie already set: ", cookie);
    else{
        Cookies.set('name', 'tutu');
        console.log("Cookie is not set.");
        console.log("Cookie now set to : ", Cookies.get('name'));
    } 
}

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

function saveMail(config){

}

function saveBasket(config){

}

function confirmSoldBasket(basketId){

}

