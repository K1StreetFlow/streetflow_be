const express = require("express");
const cartController = require("../controllers/cart.controller");
const router = express.Router();

router.get("/", cartController.getAllCarts);
router.get("/:id", cartController.getCartById);
router.post("/", cartController.createCart);
router.put("/:id", cartController.editCartById);
router.delete("/:id", cartController.deleteCartById);

// Data dari payment
router.get("/:id/cart-detail", cartController.getCartDetailByCartId);

module.exports = router;
