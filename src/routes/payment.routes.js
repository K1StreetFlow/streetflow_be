const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();

router.get("/", paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.post("/", paymentController.createPayment);
router.get("/status-order/:code_payment", paymentController.getPaymentByCode);
router.post("/process-payment", paymentController.processPayment);
router.put("/:id", paymentController.updatePayment);
router.delete("/:id", paymentController.deletePayment);
router.get("/status/:order_id", paymentController.getMidtransStatus);
router.get("/update-status/:order_id", paymentController.updateStatusPending);

module.exports = router;
