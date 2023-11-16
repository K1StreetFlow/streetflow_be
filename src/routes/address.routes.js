const express = require("express");
const addressController = require("../controllers/address.controller");
const { isAdmin } = require("../middleware/verifyToken");
const { isAdminOrCustomerID } = require("../middleware/adminMiddleware");
const router = express.Router();

router.get("/", isAdmin, addressController.getAllAddresses);
router.get("/:id", isAdminOrCustomerID, addressController.getAddressById);
router.get(
  "/customer/:id",
  isAdminOrCustomerID,
  addressController.getAddressByIdCustomer
);
router.post("/", isAdminOrCustomerID, addressController.createAddress);
router.put("/:id", isAdminOrCustomerID, addressController.updateAddressById);
router.delete("/:id", isAdminOrCustomerID, addressController.deleteAddressById);
router.delete(
  "/customer/:id",
  isAdminOrCustomerID,
  addressController.deleteAddressByCustomerId
);

module.exports = router;
