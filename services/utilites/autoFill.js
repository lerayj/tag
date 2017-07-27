var admin = require("firebase-admin"),
    serviceAccount = require("../secrets/firebase_secret.json"),
    firebaseParams = require("../secrets/firebase_params.json");

    console.log("Initialize Firebase Admin...");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: firebaseParams.databaseURL
    });

const STARTING_ID = 0;

var db = admin.database();
var ref = db.ref("websites");


var defaultWebsite = {      
    "config" : {
        "basket" : {
          "container" : "default",
          "product_id" : "default",
          "product_image" : "default",
          "product_line" : "default",
          "product_name" : "default",
          "product_price" : "default",
          "product_quantity" : "default",
          "total" : "default",
          "url" : "checkout/cart/"
        },
        "confirm_url" : [ "confirm.html" ],
        "debug" : false,
        "emails" : {
          "checkout" : {
            "existing" : "default",
            "guest" : false,
            "new" : false,
            "url" : "checkout/onepage/"
          },
          "login" : {
            "selector" : "default",
            "url" : "customer/account/login/referer"
          },
          "register" : {
            "selector" : "default",
            "url" : "customer/account/create/"
          }
        },
        "tags" : [ "//config1.veinteractive.com/tags/XXX/tag.js" ],
        "live" : false,
        "send_rules" : {
          "delay" : 30000,
          "min_product_quantity" : 1,
          "product_quantity" : 4
        },
        "type" : "retail",
        "user_infos" : {
          "civility" : "default",
          "firstname" : "default",
          "lastname" : "default",
          "url" : "customer/account/create/?context=checkout"
        }
      }
  }

var i = STARTING_ID;
var config = {};
for(i; i < 100; i++){
    console.log("Setting for client: ", i);
    config["z_client_" + i] = defaultWebsite;

}
ref.update(config);