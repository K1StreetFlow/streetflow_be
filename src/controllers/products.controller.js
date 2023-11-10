const { Products } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();

    if (products) {
      res.status(200).json({
        message: "Get All Products List Successfully",
        data: products,
      });
    } else {
      res.status(404).json({ message: "Get All Products List Failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params; // Ambil ID produk dari parameter permintaan

    // Cari produk berdasarkan ID
    const product = await Products.findByPk(id);

    if (product) {
      res.status(200).json({
        message: "Get Product by ID Successfully",
        data: product,
      });
    } else {
      res.status.json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      name_product,
      description_product,
      price_product,
      stock_product,
      size_product,
      color_product,
      id_category_product,
      id_photo_product,
      slug_product,
    } = req.body;

    const newProduct = await Products.create({
      name_product,
      description_product,
      price_product,
      stock_product,
      size_product,
      color_product,
      id_category_product,
      id_photo_product,
      slug_product,
      created_At: new Date(),
      updated_At: new Date(),
    });

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name_product,
      description_product,
      price_product,
      stock_product,
      size_product,
      color_product,
      id_category_product,
      id_photo_product,
      slug_product,
    } = req.body;

    const existingProduct = await Products.findByPk(id);

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    await existingProduct.update({
      name_product,
      description_product,
      price_product,
      stock_product,
      size_product,
      color_product,
      id_category_product,
      id_photo_product,
      slug_product,
      updated_At: new Date(),
    });

    res.status(200).json({
      message: "Product updated successfully",
      data: existingProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const productToDelete = await Products.findByPk(id);

    if (!productToDelete) {
      return res.status(404).json({ message: "Product not found" });
    }

    await productToDelete.destroy();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
