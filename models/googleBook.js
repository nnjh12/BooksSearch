const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: String,
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now }
});

const GoogleBook = mongoose.model("GoogleBook", googleBookSchema);

module.exports = GoogleBook;
