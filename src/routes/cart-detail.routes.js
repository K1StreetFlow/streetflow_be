const express = require("express");
const cartDetailController = require("../controllers/cart-detail.controller");
const router = express.Router();

router.get("/", cartDetailController.getAllCartDetail);
router.get("/:id", cartDetailController.getCartDetailById);

module.exports = router;
