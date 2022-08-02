const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Please enter the coupon code"],
    },

    discount: {
      type: Number,
      default: 0,
      required: [true, "Please enter the discount"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
