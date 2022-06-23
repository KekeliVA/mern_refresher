// this is where we do our mongoDB connection
const mongoose = require("mongoose");

const config = require("config");

// to get the value that is our mongoURI we can do:
const db = config.get("mongoURI");
