// Import depandencies
require("dotenv").config()

const express = require("express")
const app = express()

// Import Local depandencies

// Defile buildin middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB

// Calling the routers


// Running the server on port 5000
const PORT = process.env.PORT
app.listen(PORT || 5000, () => {
    console.log(`Server is running on port ${PORT} or 5000`);
})