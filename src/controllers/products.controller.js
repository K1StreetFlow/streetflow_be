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
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

module.exports = { getAllProducts, getProductById };

