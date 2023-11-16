const express = require("express");
const cartController = require("../controllers/cart.controller");
const router = express.Router();
const { isAdmin, isAdminOrCustomer } = require("../middleware/verifyToken");

router.get("/", isAdmin, cartController.getAllCarts);
router.get("/:id", isAdminOrCustomer, cartController.getCartById);
router.post("/", isAdminOrCustomer, cartController.createCart);
router.put("/:id", isAdminOrCustomer, cartController.editCartById);
router.delete("/:id", isAdminOrCustomer, cartController.deleteCartById);

// Data dari payment
router.get(
  "/:id/cart-detail",
  isAdminOrCustomer,
  cartController.getCartDetailByCartId
);

module.exports = router;
