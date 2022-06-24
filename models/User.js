const mongoose = require("mongoose");

// new instance of a schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // gravatar associates a pfp with an email and we want it available upon account creation, so that's why it's in this schema
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// the model method takes the model name and the schema
module.exports = User = mongoose.model("user", UserSchema);
