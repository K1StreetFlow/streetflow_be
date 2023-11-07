const express = require("express");
const testingController = require("../controllers/testing.controller");
const router = express.Router();

router.get("/", testingController.tes);

module.exports = router;
