const express = require("express");
const cartDetailController = require("../controllers/cart-detail.controller");
const router = express.Router();
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isAdmin, isCustomer } = require("../middleware/verifyToken");

router.get("/", cartDetailController.getAllCartDetail);
router.get("/:id", cartDetailController.getCartDetailById);
router.post("/", /*isCustomer,*/ cartDetailController.createCartDetail);
router.put("/:id", /*isCustomer,*/ cartDetailController.editQuantityCartDetail);
router.put(
  "/:idCart/:idProduct",
  /*isCustomer,*/
  cartDetailController.editCartDetail
);
router.delete(
  "/:id",
  /*isCustomer,*/ cartDetailController.deleteCartDetailById
);
router.delete(
  "/cart/:cartId",
  /*isCustomer,*/ cartDetailController.deleteCartDetailByCartId
);

module.exports = router;
