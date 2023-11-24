const express = require("express");
const {
	getAllOrder,
	getOrderById,
	updateOrder,
	createOrder,
	createOrderAndShipping,
	deleteOrder,
	getOrderByIdUser,
	getAllOrderUser,
} = require("../controllers/order_list.controller");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");
const router = express.Router();
router.get("/", getAllOrder);
router.get("/:id", getOrderById);

// Customer Side
// router.get("/allorder", getAllOrderUser);
// router.get("/user/:id", isCustomer, getOrderByIdUser);

router.put("/update/:id", updateOrder);
router.post("/create", createOrderAndShipping);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
