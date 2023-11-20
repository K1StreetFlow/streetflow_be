const { Cart, Users_customer, Cart_detail } = require("../models");

const cartController = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.findAll({
        include: [
          {
            model: Users_customer,
            as: "user_customer",
          },
        ],
      });

      if (carts.length === 0) {
        return res.status(200).json({
          message: "There is no cart data",
        });
      }

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
      const cart = await Cart.findByPk(id, {
        include: [
          {
            model: Users_customer,
            as: "user_customer",
          },
        ],
      });

      if (!cart) {
        return res.status(404).json({
          message: `Cart with id ${id} is not found`,
        });
      }

      res.status(200).json({
        message: `Get cart by id ${id}`,
        data: cart,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  createCart: async (req, res) => {
    try {
      const { body } = req;
      const cart = await Cart.create(body);
      res.status(201).json({
        message: "Cart created successfully",
        data: cart,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  editCartById: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const cart = await Cart.update(body, {
        where: {
          id,
        },
      });

      console.log(cart);

      if (!cart[0]) {
        return res.status(404).json({
          message: `Cart with id ${id} is not found`,
        });
      }

      res.status(200).json({
        message: `Cart Successfully updated with id ${id}`,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  deleteCartById: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.destroy({
        where: {
          id,
        },
      });

      if (!cart) {
        return res.status(404).json({
          message: `Cart with id ${id} is not found`,
        });
      }

      res.status(200).json({
        message: `Cart Successfully deleted with id ${id}`,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getCartDetailByCartId: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findByPk(id, {
        include: [
          {
            model: Cart_detail,
            as: "cart_detail",
          },
        ],
      });

      if (!cart) {
        return res.status(404).json({
          message: `Cart with id ${id} is not found`,
        });
      }

      res.status(200).json({
        message: `Get cart detail by cart id ${id}`,
        data: cart,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = cartController;