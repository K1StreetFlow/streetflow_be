const multer = require("multer");
const path = require("path");

// Define the allowed file types
const allowedFileTypes = ["image/jpeg", "image/png"];

// Konfigurasi multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/assets/images/profile"); // Folder tempat menyimpan file
  },
  filename: function (req, file, cb) {
    // Ganti nama file agar unik (gunakan timestamp, dll.)
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG and PNG are allowed."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
