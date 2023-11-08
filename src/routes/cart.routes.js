const express = require("express");
const cartController = require("../controllers/cart.controller");
const router = express.Router();

router.get("/", cartController.getAllCarts);
router.get("/:id", cartController.getCartById);

module.exports = router;
