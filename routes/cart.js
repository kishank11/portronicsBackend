const {
  getAllCart,
  addCart,
  updateCart,
  deleteCart,
  getCart,
} = require("../controllers/cart");
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, addCart);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

//GET USER CART
router.get("/find/:id", verifyTokenAndAuthorization, getCart);

// //GET ALL

router.get("/", verifyTokenAndAdmin, getAllCart);

module.exports = router;
