const mongoose = require("mongoose");
const userSch = new mongoose.Schema({
  Uid: Number,
  Name: String,
  Email: String,
  Bio: String,
  Gender: String,
  Mobile: String,
  Type: String,
  status: String,
});

module.exports = mongoose.model("user", userSch);
