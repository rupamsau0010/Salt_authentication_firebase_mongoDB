// Import depandencies
const mongoose = require("mongoose")

// Import Local depandencies

const generalUserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("generaluser", generalUserSchema)