var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DocumentSchema = new Schema(
  {
    originalname: { type: String },
    filename: { type: String },
    path: { type: String },
    size: { type: String },
    published: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);
