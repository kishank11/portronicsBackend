const {
  updateCoupon,
  addCoupon,
  getCoupon,
  getAllCoupon,
  deleteCoupon,
} = require("../controllers/coupon");
const Coupon = require("../models/Coupon");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, addCoupon);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateCoupon);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteCoupon);

//GET PRODUCT
router.get("/find/:id", getCoupon);

//GET ALL PRODUCTS
router.get("/", getAllCoupon);

module.exports = router;
