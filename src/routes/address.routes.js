const express = require("express");
const addressController = require("../controllers/address.controller");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const router = express.Router();

router.get("/", verifyTokenCookieAdmin, addressController.getAllAddresses);
router.get("/:id", isAdminOrSelf, addressController.getAddressById);
router.get("/customer/:id", isAdminOrSelf, addressController.getAddressByIdCustomer);
router.post("/", isAdminOrSelf, addressController.createAddress);
router.put("/:id", isAdminOrSelf, addressController.updateAddressById);
router.delete("/:id", isAdminOrSelf, addressController.deleteAddressById);
router.delete("/customer/:id", isAdminOrSelf, addressController.deleteAddressByCustomerId);

module.exports = router;