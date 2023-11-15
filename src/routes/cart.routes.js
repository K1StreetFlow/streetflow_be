const express = require("express");
const cartController = require("../controllers/cart.controller");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const router = express.Router();
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
router.use(isAdminOrSelf);

router.get("/", verifyTokenCookieAdmin, cartController.getAllCarts);
router.get("/:id", cartController.getCartById);
router.post("/", cartController.createCart);
router.put("/:id", cartController.editCartById);
router.delete("/:id", cartController.deleteCartById);

// Data dari payment
router.get("/:id/cart-detail", cartController.getCartDetailByCartId);

module.exports = router;
