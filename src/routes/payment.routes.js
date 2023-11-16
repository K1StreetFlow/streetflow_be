const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();
const { isAdmin, isAdminOrCustomer } = require("../middleware/verifyToken");
// router.use(isAdminOrCustomerID);

router.get("/", isAdmin, paymentController.getAllPayments);
router.get("/:id", isAdminOrCustomer, paymentController.getPaymentById);
router.post("/", isAdminOrCustomer, paymentController.createPayment);
router.post(
  "/process-payment",
  isAdminOrCustomer,
  paymentController.processPayment
);
router.put("/:id", isAdminOrCustomer, paymentController.updatePayment);

module.exports = router;
