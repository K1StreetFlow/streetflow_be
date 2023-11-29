const express = require("express");
const checkoutProductController = require("../../controllers/checkout/checkoutProductController");
const router = express.Router();
const { isAdminOrSelf } = require("../../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../../middleware/verifyToken");

router.get("/", checkoutProductController.getAllCheckoutProduct);
router.get("/:id", checkoutProductController.getCheckoutProductById);
router.get("/order/:id", checkoutProductController.getCheckoutProductByOrderId);
router.post("/", checkoutProductController.createCheckoutProduct);
router.delete("/:id", checkoutProductController.deleteCheckoutProductById);

module.exports = router;
