// Import depandencies
const mongoose = require("mongoose");

// Import local depandencies

const MONGO_URI = process.env.MONGO_URI;
const mongoConnect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .catch((error) => {
      console.log(error);
    })
    .then((res) => {
      console.log("Connected to MongoDB cluster");
    });
};

module.exports = mongoConnect
