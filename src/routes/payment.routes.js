const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
router.use(isAdminOrSelf);

router.get("/", verifyTokenCookieAdmin, paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.post("/", paymentController.createPayment);
router.get("/status-order/:code_payment", paymentController.getPaymentByCode);
router.post("/process-payment", paymentController.processPayment);
router.delete("/:id", paymentController.deletePayment);
router.get("/status/:order_id", paymentController.getMidtransStatus);
router.get("/update-status/:order_id", paymentController.updateStatusPending);
router.put("/:id", verifyTokenCookieAdmin, paymentController.updatePayment);

module.exports = router;
