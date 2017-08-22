var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: {type: Object, required: true, default: Date()}
})

var Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog