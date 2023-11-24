const express = require("express");
const addressController = require("../controllers/address.controller");
const { isAdmin, isCustomer, verifyUserType } = require("../middleware/verifyToken");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const router = express.Router();

router.get("/", isAdmin, addressController.getAllAddresses);
router.get("/:id", verifyUserType, addressController.getAddressById);
router.get("/customer/:id", verifyUserType, addressController.getAddressByIdCustomer);
router.post("/", isCustomer, addressController.createAddress);
router.put("/:id", verifyUserType, addressController.updateAddressById);
router.delete("/:id", isCustomer, addressController.deleteAddressById);
router.delete("/customer/:id", verifyUserType, addressController.deleteAddressByCustomerId);

module.exports = router;
