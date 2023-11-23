const express = require("express");
const addressController = require("../controllers/address.controller");
const { verifyTokenCookieAdmin, verifyTokenCookieCustomer, verifyUserType } = require("../middleware/verifyToken");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const router = express.Router();

router.get("/", verifyTokenCookieAdmin, addressController.getAllAddresses);
router.get("/:id", verifyUserType, addressController.getAddressById);
router.get("/customer/:id", verifyUserType, addressController.getAddressByIdCustomer);
router.post("/", verifyTokenCookieCustomer, addressController.createAddress);
router.put("/:id", verifyUserType, addressController.updateAddressById);
router.delete("/:id", verifyTokenCookieCustomer, addressController.deleteAddressById);
router.delete("/customer/:id", verifyUserType, addressController.deleteAddressByCustomerId);

module.exports = router;
