const express = require("express");
const cartDetailController = require("../controllers/cart-detail.controller");
const router = express.Router();
const { isAdmin, isAdminOrCustomer } = require("../middleware/verifyToken");

router.get("/", isAdmin, cartDetailController.getAllCartDetail);
router.get("/:id", isAdminOrCustomer, cartDetailController.getCartDetailById);
router.post("/", isAdminOrCustomer, cartDetailController.createCartDetail);
router.put("/:id", isAdminOrCustomer, cartDetailController.editCartDetail);
router.delete(
  "/:id",
  isAdminOrCustomer,
  cartDetailController.deleteCartDetailById
);

module.exports = router;
