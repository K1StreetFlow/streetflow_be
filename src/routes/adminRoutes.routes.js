const express = require("express");
const { createAdmin, getAllAdmins, getAdminById, editAdmin, deleteAdmin } = require("../controllers/adminController");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
const upload = require("../middleware/multerConfig");
const router = express.Router();
router.use(verifyTokenCookieAdmin);
// Routing untuk operasi pengelolaan pengguna
router.post("/", upload.single("profileImage"), createAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.put("/:id", upload.single("profileImage"), editAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
