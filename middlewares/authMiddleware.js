// Import Depandencies...
const admin = require("firebase-admin");

// Middleware for Protecting routes...
const requireAuth = (req, res, next) => {
  if (admin.verifyIdToken(req.body.getIdToken)) {
    next();
  } else {
    console.log("unrestricted");
  }
}

module.exports = { requireAuth };



