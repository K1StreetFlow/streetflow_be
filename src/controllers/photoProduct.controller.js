const { PhotoProduct } = require("../models");
const upload = require("../middleware/multer-config.js");



const ITEMS_PER_PAGE = 10;

const getAllPhotosWithPagination = async (req, res) => {
  try {
    const page = req.query.page || 1; // Get page number from query parameter or default to 1
    const offset = (page - 1) * ITEMS_PER_PAGE;

    const photos = await PhotoProduct.findAndCountAll({
      limit: ITEMS_PER_PAGE,
      offset: offset,
    });

    const totalPages = Math.ceil(photos.count / ITEMS_PER_PAGE);

    res.status(200).json(totalPages).message("Get All Photo With Pagination");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllPhotos = async (req, res) => {
  try {
    const photos = await PhotoProduct.findAll();
    res.status(200).json(photos).message("Get All Photo Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPhotoById = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await PhotoProduct.findByPk(id);

    if (!photo) {
      return res.status(404).json({ error: "Photo not found" });
    }

    res.status(200).json(photo).message(`Get Photo Successfully at ID: ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const uploadPhoto = async (req, res) => {
  try {
    const { filename } = req.file;
    const newPhoto = await PhotoProduct.create({ photo_product: filename });
    res.status(201).json(newPhoto).message("Created Photo Product Successfully");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to upload photo", details: error.message });
  }
};

const editPhoto = async (req, res) => {
  const { id } = req.params;
  const { filename } = req.file;

  try {
    const photo = await PhotoProduct.findByPk(id);

    if (!photo) {
      return res.status(404).json({ error: "Photo not found" });
    }

    await photo.update({ photo_product: filename });
    res.status(200).json(photo).message(`Updated Photo Product Successfully at ID: ${id}`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to edit photo", details: error.message });
  }
};

const deletePhoto = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await PhotoProduct.findByPk(id);

    if (!photo) {
      return res.status(404).json({ error: "Photo not found" });
    }

    await photo.destroy();
    res.status(200).json(photo).message("Photo deleted successfully");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to delete photo", details: error.message });
  }
};

module.exports = {
  getAllPhotos,
  getPhotoById,
  getAllPhotosWithPagination,
  uploadPhoto,
  editPhoto,
  deletePhoto,
};
