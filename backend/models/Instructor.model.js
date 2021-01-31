var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InstructorSchema = new Schema(
	{
		name: { type: String },
		photo: { type: String },
<<<<<<< HEAD
=======
		banner: { type: String },
>>>>>>> b0f244956718d63aea63149620a0c7cd5d774689
		bio: { type: String },
		earnings: { type: Number, default: 0 },
		teaches: [{ type: String }],
		band: { type: String },
		course: [{ type: Schema.Types.ObjectId }],
		document: [{ type: Schema.Types.ObjectId }],
		video: [
			{
				type: Schema.Types.ObjectId,
			},
		],
		sold: { type: Number, default: 0 },
		featured: { type: Boolean, default: false },
		published: { type: Boolean, default: true },
		percentage: { type: Number, default: 30 }
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Instructor", InstructorSchema);
