const { Schema, model } = require("mongoose");

const Transaction = new Schema(
  {
    paymentId: {
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
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancel","failed"],
      default: "pending",
    },
    note:{
      type: String,
    },
    message:{
      type: String,
    }
  },
  { timestamps: true }
);
module.exports = model("Transaction", Transaction);
