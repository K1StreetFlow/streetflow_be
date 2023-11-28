const {
  Checkout_product,
  Cart,
  Product,
  Users_customer,
  PhotoProduct,
  Order_list,
} = require("../models");

const cardDetailController = {
  getAllCheckoutProduct: async (req, res) => {
    try {
      const checkout_products = await Checkout_product.findAll({
        include: [
          {
            model: Order_list,
            as: "order",
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
  // editCartDetail: async (req, res) => {
  //   try {
  //     const { idCart } = req.params;
  //     const { idProduct } = req.params;
  //     const { quantity } = req.body;

  //     const price = await Product.findByPk(idProduct);

  //     const cart_detail = await Cart_detail.update(
  //       {
  //         quantity,
  //         total_price: price.price_product * quantity,
  //       },
  //       {
  //         where: {
  //           id_cart: idCart,
  //           id_product: idProduct,
  //         },
  //       }
  //     );

  //     if (!cart_detail[0]) {
  //       return res.status(404).json({
  //         message: `Checkout Product with id ${id} is not found`,
  //       });
  //     }

  //     res.status(200).json(req.body);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  // },

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
