const express = require("express");
const router = express.Router();
const {
	getAllNomor_resi,
	getNomor_resiById,
	createNomor_resi,
	updateNomor_resi,
	deleteNomor_resi,
} = require("../controllers/nomor_resi.controller");

router.get("/", getAllNomor_resi);
router.get("/:id", getNomor_resiById);
router.post("/create", createNomor_resi);
router.put("/update/:id", updateNomor_resi);
router.delete("/delete/:id", deleteNomor_resi);

module.exports = router;