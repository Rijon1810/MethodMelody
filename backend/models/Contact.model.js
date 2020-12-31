var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
	name: { type: String },
	from:{type:String},
	to: {type: String},
    instructor: { type: String },
    email: { type: String },
    message: { type: String },
    reply: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
