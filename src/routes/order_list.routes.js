const express = require("express");
const { getAllOrder } = require("../controllers/order_list.controller");
const router = express.Router();

router.get("/", getAllOrder);

module.exports = router;
