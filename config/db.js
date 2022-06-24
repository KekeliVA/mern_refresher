// this is where we do our mongoDB connection
const mongoose = require("mongoose");

const config = require("config");

// to get the value that is our mongoURI we can do:
const db = config.get("mongoURI");

/**
 * connect to mongoDB - this returns a PROMISE - this means we can use .then .catch || async await
 * we need something to call in our serverjs so that's why we make this a function
 * it also needs to be in a try catch block in case anything bad happens in the process
 */
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
