const express = require("express");
const cartDetailController = require("../controllers/cart-detail.controller");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
router.use(isAdminOrSelf);

router.get("/", verifyTokenCookieAdmin, cartDetailController.getAllCartDetail);
router.get("/:id", cartDetailController.getCartDetailById);
router.post("/", cartDetailController.createCartDetail);
router.put("/:id", cartDetailController.editCartDetail);
router.delete("/:id", cartDetailController.deleteCartDetailById);

module.exports = router;
