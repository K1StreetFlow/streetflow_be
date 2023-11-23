const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();
const { isAdmin, isAdminOrCustomer } = require("../middleware/verifyToken");
// router.use(isAdminOrCustomerID);

router.get("/", paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.post("/", paymentController.createPayment);
router.post("/process-payment", paymentController.processPayment);
router.put("/:id", paymentController.updatePayment);
router.delete("/:id", paymentController.deletePayment);
router.get("/status/:order_id", paymentController.getMidtransStatus);

module.exports = router;