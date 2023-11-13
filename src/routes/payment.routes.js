const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();

router.get("/", paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.post("/", paymentController.createPayment);
router.post("/process-payment", paymentController.processPayment);

module.exports = router;
