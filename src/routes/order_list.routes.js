const express = require("express");
const {
  getAllOrder,
  getOrderById,
  updateOrder,
  createOrder,
  deleteOrder,
} = require("../controllers/order_list.controller");
const { isAdmin, isAdminOrCustomer } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", isAdmin, getAllOrder);
router.get("/:id", isAdminOrCustomer, getOrderById);
router.put("/update/:id", isAdmin, updateOrder);
router.post("/create", isAdmin, createOrder);
router.delete("/delete/:id", isAdmin, deleteOrder);

module.exports = router;
