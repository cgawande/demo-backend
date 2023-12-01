const { Schema, model } = require("mongoose");

const Transaction = new Schema(
  {
    transactionId: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId:{
        type: String, 
    },
    type: {
      type: String,
      enum: ["debit", "credit"],
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancel"],
      default: "pending",
    },
  },
  { timestamps: true }
);
module.exports = model("Transaction", Transaction);
