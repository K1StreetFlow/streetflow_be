const express = require("express");
const addressController = require("../controllers/address.controller");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const router = express.Router();

router.get("/", verifyTokenCookieAdmin, addressController.getAllAddresses);
router.get("/:id", isAdminOrSelf, addressController.getAddressById);
router.post("/", isAdminOrSelf, addressController.createAddress);
router.put("/:id", isAdminOrSelf, addressController.updateAddressById);
router.delete("/:id", isAdminOrSelf, addressController.deleteAddressById);

module.exports = router;
