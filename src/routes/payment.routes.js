const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
router.use(isAdminOrSelf);

router.get("/", verifyTokenCookieAdmin, paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.post("/", paymentController.createPayment);
router.post("/process-payment", paymentController.processPayment);
router.put("/:id", verifyTokenCookieAdmin, paymentController.updatePayment);

module.exports = router;
