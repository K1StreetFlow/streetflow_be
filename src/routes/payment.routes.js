const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();

router.get("/", paymentController.getAllPayments);

module.exports = router;
