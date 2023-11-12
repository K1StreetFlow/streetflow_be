const express = require("express");
const {
	getAllOrder,
	getOrderById,
	updateOrder,
	createOrder,
	deleteOrder,
} = require("../controllers/order_list.controller");
const router = express.Router();

router.get("/", getAllOrder);
router.get("/:id", getOrderById);
router.get("/update/:id", updateOrder);
router.get("/create", createOrder);
router.get("/delete/:id", deleteOrder);

module.exports = router;
