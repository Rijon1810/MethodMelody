var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CuponSchema = new Schema(
	{
		cuponCode: { type: String , required: true },
		discount: { type: Number , required : true },
		useLimit: { type: Number },
		expireDate: { type: String  , required: true },
		presentCount: { type: Number, default: 0 },
		whoUsed : [{type : String}]
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Cupon", CuponSchema);
