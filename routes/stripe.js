const { payment, createSource } = require("../controllers/stripe");

const router = require("express").Router();

router.post("/payment", payment);
router.post("/createSource", createSource);

module.exports = router;
