const express = require("express");
const {
	getAllOrder,
	getOrderById,
	updateOrder,
	createOrder,
	createOrderAndShipping,
	deleteOrder,
} = require("../controllers/order_list.controller");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin } = require("../middleware/verifyToken");
const router = express.Router();
router.use(isAdminOrSelf);
router.get("/", isAdmin, getAllOrder);
router.get("/:id", getOrderById);
router.put("/update/:id", updateOrder);
router.post("/create", createOrderAndShipping);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
