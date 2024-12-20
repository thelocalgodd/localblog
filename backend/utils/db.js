const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongoDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connection Successful");
    })
    .catch((e) => {
      console.log("Error Connecting to MongoDB", e);
    });
};

module.exports = { connectToMongoDb };
