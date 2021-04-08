var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema(
	{
		userId: { type: String , required: true },
		paid: {type: Boolean, default: false},
		amount: { type: Number, default: 0 },
		courses : [{type : String}]
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
