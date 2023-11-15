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
router.put("/update/:id", updateOrder);
router.post("/create", createOrder);
router.delete("/delete/:id", deleteOrder);

module.exports = router;