const express = require("express");
const checkoutProductController = require("../controllers/checkoutProductController");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");

router.get("/", checkoutProductController.getAllCheckoutProduct);
router.get("/:id", checkoutProductController.getCheckoutProductById);
router.get("/order/:id", checkoutProductController.getCheckoutProductByOrderId);
router.post("/", checkoutProductController.createCheckoutProduct);
// router.put("/:id", /*isCustomer,*/ checkoutProductController.editQuantityCartDetail);
// router.put(
//   "/:idCart/:idProduct",
//   /*isCustomer,*/
//   checkoutProductController.editCartDetail
// );
router.delete(
  "/:id",
  /*isCustomer,*/ checkoutProductController.deleteCheckoutProductById
);

module.exports = router;
