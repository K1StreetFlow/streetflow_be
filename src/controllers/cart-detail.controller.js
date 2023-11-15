const { Cart_detail, Cart, Product } = require("../models");

const cardDetailController = {
  getAllCartDetail: async (req, res) => {
    try {
      const cart_details = await Cart_detail.findAll({
        include: [
          {
            model: Cart,
            as: "cart",
          },
          {
            model: Product,
            as: "product",
          },
        ],
      });
      res.status(200).json({
        message: "Get all cart details",
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
      const cart_detail = await Cart_detail.findByPk(id, {
        include: [
          {
            model: Cart,
            as: "cart",
          },
          {
            model: Product,
            as: "product",
          },
        ],
      });
      res.status(200).json({
        message: `Get cart detail by id ${id}`,
        data: cart_detail,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  createCartDetail: async (req, res) => {
    try {
      const { body } = req;
      const cart_detail = await Cart_detail.create(body);
      res.status(201).json({
        message: "Create new cart",
        data: cart_detail,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  editCartDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const cart_detail = await Cart_detail.update(body, {
        where: {
          id,
        },
      });

      if (!cart_detail[0]) {
        return res.status(404).json({
          message: `Cart detail with id ${id} is not found`,
        });
      }

      res.status(200).json({
        message: `Cart detail updated successfully`,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  deleteCartDetailById: async (req, res) => {
    try {
      const { id } = req.params;
      const cart_detail = await Cart_detail.destroy({
        where: {
          id,
        },
      });

      if (!cart_detail) {
        return res.status(404).json({
          message: `Cart detail with id ${id} is not found`,
        });
      }

      res.status(200).json({
        message: `Cart detail deleted successfully`,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = cardDetailController;
