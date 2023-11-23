const express = require("express");
const cartController = require("../controllers/cart.controller");
const router = express.Router();
const {
  isAdmin,
  isAdminOrCustomer,
  isCustomer,
} = require("../middleware/verifyToken");
const { route } = require("./authAdminRoutes.routes");

router.get("/", cartController.getAllCarts);
router.get("/:id", cartController.getCartById);
router.get("/user/cart", isCustomer, cartController.getCartByUserId);
router.post("/", cartController.createCart);
router.put("/:id", cartController.editCartById);
router.delete("/:id", cartController.deleteCartById);

module.exports = router;
