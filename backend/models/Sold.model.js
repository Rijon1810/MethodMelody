var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SoldSchema = new Schema(
    {
        courseId: { type: Schema.Types.ObjectId },
        dateTime: [{ type: String }],
        ammount: { type: Number, default: 0},
        instructor_earn: { type: Number, default: 0},
        user: [{ type: String }],
        sold: { type: Number, default: 1 },
        instructor: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Sold", SoldSchema);
