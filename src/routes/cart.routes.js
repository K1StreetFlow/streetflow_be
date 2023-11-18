const express = require("express");
const cartController = require("../controllers/cart.controller");
const router = express.Router();
const { isAdmin, isAdminOrCustomer } = require("../middleware/verifyToken");

router.get("/", cartController.getAllCarts);
router.get("/:id", cartController.getCartById);
router.post("/", cartController.createCart);
router.put("/:id", cartController.editCartById);
router.delete("/:id", cartController.deleteCartById);

module.exports = router;
