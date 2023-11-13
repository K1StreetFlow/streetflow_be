const express = require("express");
const router = express.Router();
const {
	getAllAddress,
	getAddressById,
	createAddress,
	updateAddress,
	deleteAddress,
} = require("../controllers/address.controller");

router.get("/", getAllAddress);
router.get("/:id", getAddressById);
router.post("/create", createAddress);
router.put("/update/:id", updateAddress);
router.delete("/delete/:id", deleteAddress);

module.exports = router;