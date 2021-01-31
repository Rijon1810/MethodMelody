var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
<<<<<<< HEAD
	title: { type: String },
	desc: { type: String },
	file: { type: String },
	duration: { type: String },
	eligibility: { type: String },
	course: [{ type: Schema.Types.ObjectId }],
	instructor: {
		type: Schema.Types.ObjectId,
	},
	document: [{ type: Schema.Types.ObjectId }],
=======
	originalname: { type: String },
	filename: { type: String },
	path: { type: String },
	size: { type: String },
	published: { type: String },
>>>>>>> b0f244956718d63aea63149620a0c7cd5d774689
});

module.exports = mongoose.model("Video", VideoSchema);
