const express = require("express");
const paymentController = require("../controllers/payment.controller");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");

router.get("/", isAdmin, paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.post("/", paymentController.createPayment);
router.get(
  "/status-order/:code_payment",

  paymentController.getPaymentByCode
);
router.post("/process-payment", paymentController.processPayment);
router.delete("/:id", isAdmin, paymentController.deletePayment);
router.get(
  "/status/:order_id",

  paymentController.getMidtransStatus
);
router.get(
  "/update-status/user",

  paymentController.updateAllStatusPending
);
router.put("/:id", paymentController.updatePayment);

module.exports = router;
