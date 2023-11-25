const express = require("express");
const {
	getAllShipping,
	getShippingById,
	createShipping,
	updateShipping,
	deleteShipping,
	updateShippingAndOrderList,
	getShippingByUserId,
} = require("../controllers/shipping.controller");
// const { isAdmin } = require("../middleware/verifyToken");
const { isCustomer } = require("../middleware/verifyToken");
const router = express.Router();

// router.get("/user", isCustomer, getShippingByUserId);

router.get("/", getAllShipping);
router.get("/:id", getShippingById);
router.post("/create", createShipping);
router.put("/update/:id", updateShipping);
router.put("/updateorder/:id", updateShippingAndOrderList);
router.delete("/delete/:id", deleteShipping);

module.exports = router;
