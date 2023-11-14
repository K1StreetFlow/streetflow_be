const { Cart, User_customer, Cart_detail } = require("../models");

const cartController = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.findAll({
        // include: [
        //   {
        //     model: User,
        //     as: "user",
        //   },
        // ],
      });
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
        // include: [
        //   {
        //     model: User,
        //     as: "user",
        //   },
        // ],
      });
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
      res.status(200).json({
        message: `Get cart detail by cart id ${id}`,
        data: cart,
      });
      // const payment = await cart.getPayment();
      // res.status(200).json({
      //   message: `Get payment by cart id ${id}`,
      //   data: payment,
      // });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = cartController;
