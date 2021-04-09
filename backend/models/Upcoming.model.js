var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UpcomingSchema = new Schema(
	{
    photo: { type: String },
    name: { type: String }

	},
	{ timestamps: true }
);

module.exports = mongoose.model("Upcoming", UpcomingSchema);
