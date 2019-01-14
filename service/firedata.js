// 輸入 database 網址
var admin = require("firebase-admin");
var serviceAccount = require("./okstartkit-firebase-adminsdk-xc6v7-4300234431");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://okstartkit.firebaseio.com"
});

module.exports = admin.database();