const express = require("express");
const cartDetailController = require("../controllers/cart-detail.controller");
const router = express.Router();

router.get("/", cartDetailController.getAllCartDetail);
router.get("/:id", cartDetailController.getCartDetailById);
router.post("/", cartDetailController.createCartDetail);
router.put("/:id", cartDetailController.editCartDetail);
router.delete("/:id", cartDetailController.deleteCartDetailById);

module.exports = router;
