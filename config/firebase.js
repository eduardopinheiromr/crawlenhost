const fs = require("firebase-admin");
require("dotenv").config();

const serviceAccount = JSON.parse(process.env.GOOGLE_CREDENTIALS);

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
});

module.exports = db = fs.firestore();
