const multer = require("multer");

// Konfigurasi untuk menyimpan file dengan nama unik ke folder "./src/uploads/single" atau "./src/uploads/multiple"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Menentukan destinasi berdasarkan jumlah file yang diunggah
    const destinationFolder = file.length > 1 ? "./src/uploads/multiple" : "./src/uploads/single";
    cb(null, destinationFolder);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

// Konfigurasi untuk mengizinkan pengguna mengunggah satu file atau hingga 5 file sekaligus
const upload = multer({ storage }).array("photo", 5);

module.exports = upload;

