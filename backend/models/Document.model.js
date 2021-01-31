var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DocumentSchema = new Schema(
<<<<<<< HEAD
	{
		file: { type: String },
		desc: { type: String },
		size: { type: String },
		course: [{ type: Schema.Types.ObjectId }],
		video: [{ type: Schema.Types.ObjectId }],
		instructor: {
			type: Schema.Types.ObjectId,
		},
	},
	{ timestamps: true }
=======
  {
    originalname: { type: String },
    filename: { type: String },
    path: { type: String },
    size: { type: String },
    published: { type: String },
  },
  { timestamps: true }
>>>>>>> b0f244956718d63aea63149620a0c7cd5d774689
);

module.exports = mongoose.model("Document", DocumentSchema);
