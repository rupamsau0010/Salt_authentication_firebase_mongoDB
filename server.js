// Import depandencies
require("dotenv").config()

const express = require("express")
const app = express()

// Import Local depandencies
const mongoConnect = require("./configs/mongoDB")
// const generalUserEntry = require("./temp/generalUserEntry")

// Defile buildin middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
mongoConnect()

// Calling the routers
// GeneralUserEntry
// generalUserEntry()


// Running the server on port 5000
const PORT = process.env.PORT
app.listen(PORT || 5000, () => {
    console.log(`Server is running on port ${PORT} or 5000`);
})