var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema(
<<<<<<< HEAD
	{
		name: { type: String },
		email: { type: String },
		message: { type: String },
	},
	{ timestamps: true }
=======
  {
    name: { type: String },
    from: { type: Schema.Types.ObjectId },
    to: { type: Schema.Types.ObjectId },
    email: { type: String },
    message: { type: String },
    reply: { type: String },
  },
  { timestamps: true }
>>>>>>> b0f244956718d63aea63149620a0c7cd5d774689
);

module.exports = mongoose.model("Contact", ContactSchema);
