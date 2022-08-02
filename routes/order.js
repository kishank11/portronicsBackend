const {
  deleteOrder,
  addOrder,
  updateOrder,
  getAllOrders,
  getUserOrder,
  ordersSold,
} = require("../controllers/orders");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, addOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);

// //GET ALL

router.get("/", verifyTokenAndAdmin, getAllOrders);
//GET SOLD Orders

router.get("/", verifyTokenAndAdmin, ordersSold);

module.exports = router;
