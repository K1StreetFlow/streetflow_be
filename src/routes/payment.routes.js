const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");

router.get("/", isAdmin, paymentController.getAllPayments);
router.get("/:id", isAdmin, paymentController.getPaymentById);
router.post("/", isCustomer, paymentController.createPayment);
router.get(
  "/status-order/:code_payment",
  isCustomer,
  paymentController.getPaymentByCode
);
router.post("/process-payment", isCustomer, paymentController.processPayment);
router.delete("/:id", isAdmin, paymentController.deletePayment);
router.get(
  "/status/:order_id",
  isCustomer,
  paymentController.getMidtransStatus
);
router.get(
  "/update-status/:order_id",
  isCustomer,
  paymentController.updateStatusPending
);
router.put("/:id", isCustomer, paymentController.updatePayment);

module.exports = router;
