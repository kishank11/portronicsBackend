const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const couponRoute = require("./routes/coupon");
const cors = require("cors");

dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1/portronics")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("tiny"));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/coupons", couponRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running!");
});
