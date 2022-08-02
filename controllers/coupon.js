const Coupon = require("../models/Coupon");

const addCoupon = async (req, res) => {
  try {
    const { code, type, discount } = req.body;
    const coupon = new Coupon({
      code,
      type,
      discount,
    });
    coupon.save((err, result) => {
      if (err) {
        return res
          .status(400)
          .json({ msg: "coupon not added", err: err.message });
      } else {
        return res.status(200).json({ msg: "coupon added", data: result });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};
const getAllCoupon = async (req, res) => {
  try {
    Coupon.find((err, results) => {
      if (err) {
        return res.status(400).json({ err: err.message });
      } else {
        return res.status(200).json(results);
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};
const getCoupon = async (req, res) => {
  try {
    Coupon.findById(req.params.id, (err, result) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      } else {
        return res.status(200).json(result);
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};
const updateCoupon = async (req, res) => {
  try {
    Coupon.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
      if (err) {
        return res.status(400).json({ err: err.message });
      } else {
        return res
          .status(200)
          .json({ msg: "updated successfully", data: result });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};
const deleteCoupon = async (req, res) => {
  try {
    Coupon.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) {
        return res.status(400).json({ err: err.message });
      } else {
        return res.status(200).json({ msg: "deleted", data: result });
      }
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  addCoupon,
  getCoupon,
  getAllCoupon,
  deleteCoupon,
  updateCoupon,
};
