var admin = require("firebase-admin"),
    serviceAccount = require("./firebase_secret.json"),
    firebaseParams = require("./firebase_params.json");

    console.log("Initialize Firebase Admin...");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: firebaseParams.databaseURL
    });