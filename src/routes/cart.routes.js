const express = require("express");
const cartController = require("../controllers/cart.controller");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const router = express.Router();
const { isAdmin, isCustomer } = require("../middleware/verifyToken");

router.get("/", cartController.getAllCarts);
router.get("/:id", cartController.getCartById);
router.get("/user/cart", isCustomer, cartController.getCartByUserId);
router.post("/", isCustomer, cartController.createCart);
router.put("/:id", isCustomer, cartController.editCartById);
router.delete("/:id", isCustomer, cartController.deleteCartById);

module.exports = router;
