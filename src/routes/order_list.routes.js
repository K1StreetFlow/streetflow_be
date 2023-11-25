const express = require("express");
const {
  getAllOrder,
  getUserOrder,
  getOrderById,
  updateOrder,
  createOrderAndShipping,
  deleteOrder,
} = require("../controllers/order_list.controller");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", getAllOrder);
router.get("/:id", getOrderById);
router.put("/update/:id", updateOrder);
router.post("/create", createOrderAndShipping);
router.delete("/delete/:id", deleteOrder);
router.get("/user/orderList", isCustomer, getUserOrder);

module.exports = router;
