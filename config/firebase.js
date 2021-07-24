const fs = require("firebase-admin");

// If credential is in key.json
const serviceAccount = require("./key.json");

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
});

module.exports = db = fs.firestore();
