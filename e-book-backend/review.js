const mongoose = require("mongoose");
const ReviewSch = new mongoose.Schema({
  Name: String,
  Title: String,
  Desc: String,
});

module.exports = mongoose.model("Review", ReviewSch);
