const express = require("express")

const router = express.Router()

// Import local depandencies
const  userControllers = require("../controllers/userControllers")
const { requireAuth } = require("../middlewares/authMiddleware")

router.get("/getuser", requireAuth, userControllers.generalController_get)

// Export the module
module.exports = router