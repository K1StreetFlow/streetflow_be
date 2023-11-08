const { Cart } = require("../models");

const cartController = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.findAll();
      res.status(200).json({
        message: "Get all carts",
        data: carts,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getCartById: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findByPk(id);
      res.status(200).json({
        message: `Get cart by id ${id}`,
        data: cart,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = cartController;
