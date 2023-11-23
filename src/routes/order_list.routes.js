const express = require("express");
const {
	getAllOrder,
	getOrderById,
	updateOrder,
	createOrderAndShipping,
	deleteOrder,
} = require("../controllers/order_list.controller");
const router = express.Router();

router.get("/", getAllOrder);
router.get("/:id", getOrderById);
router.put("/update/:id", updateOrder);
router.post("/create", createOrderAndShipping);
router.delete("/delete/:id", deleteOrder);

module.exports = router;