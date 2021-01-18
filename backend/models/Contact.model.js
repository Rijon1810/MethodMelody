var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
    name: { type: String },
    from: { type: Schema.Types.ObjectId },
    to: { type: Schema.Types.ObjectId },
    email: { type: String },
    message: { type: String },
    reply: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
