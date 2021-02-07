var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PurchaseSchema = new Schema(
  {
    status: { type: String },
    tran_date: { type: String },
    tran_id: { type: String },
    val_id: { type: String },
    amount: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Purchase", PurchaseSchema);
