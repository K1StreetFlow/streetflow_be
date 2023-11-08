const { Cart_detail } = require("../models");

const cardDetailController = {
  getAllCartDetail: async (req, res) => {
    try {
      const cart_details = await Cart_detail.findAll();
      res.status(200).json({
        message: "Get all carts",
        data: cart_details,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getCartDetailById: async (req, res) => {
    try {
      const { id } = req.params;
      const cart_detail = await Cart_detail.findByPk(id);
      res.status(200).json({
        message: `Get cart by id ${id}`,
        data: cart_detail,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = cardDetailController;
