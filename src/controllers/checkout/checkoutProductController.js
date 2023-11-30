const {
  Checkout_product,
  Cart,
  Product,
  Users_customer,
  PhotoProduct,
  Order_list,
  Review_products,
} = require("../../models");

const cardDetailController = {
  getAllCheckoutProduct: async (req, res) => {
    try {
      const checkout_products = await Checkout_product.findAll({
        include: [
          {
            model: Order_list,
            as: "order",
            include: [
              {
                model: Review_products,
                as: "review",
              },
            ],
          },
          {
            model: Cart,
            as: "cart",
            include: [
              {
                model: Users_customer,
                as: "user_customer",
              },
            ],
          },
          {
            model: Product,
            as: "product",
            include: [
              {
                model: PhotoProduct,
                as: "photo",
              },
            ],
          },
        ],
      });
      res.status(200).json(checkout_products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getCheckoutProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const checkout_product = await Checkout_product.findByPk(id, {
        include: [
          {
            model: Order_list,
            as: "order",
            include: [
              {
                model: Review_products,
                as: "review",
              },
            ],
          },
          {
            model: Cart,
            as: "cart",
            include: [
              {
                model: Users_customer,
                as: "user_customer",
              },
            ],
          },
          {
            model: Product,
            as: "product",
            include: [
              {
                model: PhotoProduct,
                as: "photo",
              },
            ],
          },
        ],
      });
      res.status(200).json(checkout_product);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getCheckoutProductByOrderId: async (req, res) => {
    try {
      const { id } = req.params;
      const checkout_product = await Checkout_product.findAll({
        where: {
          id_order: id,
        },
        include: [
          {
            model: Order_list,
            as: "order",
            include: [
              {
                model: Review_products,
                as: "review",
              },
            ],
          },
          {
            model: Cart,
            as: "cart",
            include: [
              {
                model: Users_customer,
                as: "user_customer",
              },
            ],
          },
          {
            model: Product,
            as: "product",
            include: [
              {
                model: PhotoProduct,
                as: "photo",
              },
            ],
          },
        ],
      });
      res.status(200).json(checkout_product);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  createCheckoutProduct: async (req, res) => {
    try {
      const checkout = await Checkout_product.create(req.body);
      res.status(201).json(checkout);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteCheckoutProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const cart_detail = await Checkout_product.destroy({
        where: {
          id_cart: id,
        },
      });

      if (!cart_detail) {
        return res.status(404).json({
          message: `Checkout Product with id ${id} is not found`,
        });
      }

      res.status(200).json({
        message: `Checkout Product deleted successfully`,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = cardDetailController;
