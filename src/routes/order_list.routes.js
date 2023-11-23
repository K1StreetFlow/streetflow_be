const express = require("express");
const { getAllOrder, getOrderById, updateOrder, createOrder, deleteOrder } = require("../controllers/order_list.controller");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
const router = express.Router();
router.use(isAdminOrSelf);
router.get("/", verifyTokenCookieAdmin, getAllOrder);
router.get("/:id", getOrderById);
router.put("/update/:id", updateOrder);
router.post("/create", createOrder);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
