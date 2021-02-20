var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
    name: { type: String },
    from: { type: Schema.Types.ObjectId },
    toName: { type: String },
    to: { type: Schema.Types.ObjectId },
    email: { type: String },
    message: { type: String },
    reply: { type: String },
    type: { type: String, default: "general" },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
