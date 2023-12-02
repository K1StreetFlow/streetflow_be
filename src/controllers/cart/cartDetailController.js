const {
  Cart_detail,
  Cart,
  Product,
  Users_customer,
  PhotoProduct,
} = require("../../models");

const cardDetailController = {
  getAllCartDetail: async (req, res) => {
    try {
      const cart_details = await Cart_detail.findAll({
        order: [["id_cart", "ASC"]],
        include: [
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
      res.status(200).json(cart_details);
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
      res.status(200).json(cart_detail);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  createCartDetail: async (req, res) => {
    try {
      const { id_cart, id_product, quantity } = req.body;

      const price = await Product.findByPk(id_product);

      const cart_detail = await Cart_detail.create({
        id_cart,
        id_product,
        quantity,
        total_price: price.price_product * quantity,
      });
      res.status(201).json({
        message: "Create new cart",
        data: cart_detail,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  editCartDetail: async (req, res) => {
    try {
      const { idCart } = req.params;
      const { idProduct } = req.params;
      const { quantity } = req.body;

      const price = await Product.findByPk(idProduct);

      const cart_detail = await Cart_detail.update(
        {
          quantity,
          total_price: price.price_product * quantity,
        },
        {
          where: {
            id_cart: idCart,
            id_product: idProduct,
          },
        }
      );

      if (!cart_detail[0]) {
        return res.status(404).json({
          message: `Cart detail with id ${id} is not found`,
        });
      }

      res.status(200).json(req.body);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  editQuantityCartDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const { quantity } = req.body;

      const getCurrentCartDetail = await Cart_detail.findByPk(id);
      const price = await Product.findByPk(getCurrentCartDetail.id_product);

      const cart_detail = await Cart_detail.update(
        {
          quantity,
          total_price: price.price_product * quantity,
        },
        {
          where: {
            id,
          },
        }
      );

      if (!cart_detail[0]) {
        return res.status(404).json({
          message: `Cart detail with id ${id} is not found`,
        });
      }

      res.status(200).json(req.body);
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
  deleteCartDetailByCartId: async (req, res) => {
    try {
      const { cartId } = req.params;
      const cart_detail = await Cart_detail.destroy({
        where: {
          id_cart: cartId,
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
