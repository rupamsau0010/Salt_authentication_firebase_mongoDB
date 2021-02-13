// Import depandencies
const admin = require("firebase-admin")

const firebaseSignup = () => {
    var serviceAccount = require("../signup234-84b56-firebase-adminsdk-vyfv5-aa1c2e4750.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

module.exports = firebaseSignup