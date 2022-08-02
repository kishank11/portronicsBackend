const Order = require("../models/Order");
const Coupon = require("../models/Coupon");

const addOrder = async (req, res) => {
  let { userId, products, couponcode, amount, address, status } = req.body;

  console.log(req.body);
  const data = await Coupon.find({ code: couponcode }, async (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(result[0].discount);

      let amt = parseFloat(amount - (amount * result[0].discount) / 100);

      await Order.create({
        userId,
        products,
        amount: amt,
        couponcode,
        address,
        status,
      })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    }
  }).clone();

  console.log(data);
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserOrder = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    let totalAmount = 0;

    orders.forEach((order) => {
      totalAmount += order.amount;
    });
    res.status(200).json({
      success: true,
      totalAmount,
      orders,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const ordersSold = async (req, res) => {
  const result = await Order.find({ sold: true })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(402).json(e);
    });
  console.log(result);
};
module.exports = {
  addOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
  ordersSold,
};
