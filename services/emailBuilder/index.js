//save Template email on google cloud (text and upload images)

//put a pixel image with the session id on each templated email(eg in the name)
//TODO: check if the mail for a session as been open (check log of the image provider)
//check if there as been a conversion after the opening and before the attribution time
//update the database to attributed true
//make a daily report of attribution (witch session and for how much)
//MAKE MONEY

var admin = require("firebase-admin");

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
};
firebase.initializeApp(config);

const keyFilename="./my-private-api-key-file.json"; //replace this with api key file
const projectId = "my-project-id-should-go-here" //replace with your project id
const bucketName = `${projectId}.appspot.com`;

const gcs = require('@google-cloud/storage')({
    projectId,
    keyFilename
});

const bucket = gcs.bucket(bucketName);
