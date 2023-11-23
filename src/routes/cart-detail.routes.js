const express = require("express");
const cartDetailController = require("../controllers/cart-detail.controller");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin } = require("../middleware/verifyToken");

router.get("/", cartDetailController.getAllCartDetail);
router.get("/:id", cartDetailController.getCartDetailById);
router.post("/", cartDetailController.createCartDetail);
router.put("/:id", cartDetailController.editQuantityCartDetail);
router.put("/:idCart/:idProduct", cartDetailController.editCartDetail);
router.delete("/:id", cartDetailController.deleteCartDetailById);

module.exports = router;
