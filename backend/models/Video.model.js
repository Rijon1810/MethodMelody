var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
  originalname: { type: String },
  filename: { type: String },
  path: { type: String },
  size: { type: String },
  published: { type: String },
  status: { type: String, default: "paid" },
});

module.exports = mongoose.model("Video", VideoSchema);
