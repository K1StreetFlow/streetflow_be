const {
  Cart,
  Users_customer,
  Cart_detail,
  Product,
  Address,
  sequelize,
  PhotoProduct,
} = require("../models");

const cartController = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.findAll({
        order: [["id", "DESC"]],
        include: [
          {
            model: Cart_detail,
            as: "cart_detail",
            include: [
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
          },
          {
            model: Users_customer,
            as: "user_customer",
            include: [
              {
                model: Address,
                as: "address",
              },
            ],
          },
        ],
      });

      if (carts.length === 0) {
        return res.status(200).json({
          message: "There is no cart data",
        });
      }

      // menampilkan grand price dari tiap cart
      const data = carts.map((cart) => {
        const grandPrice = cart.cart_detail.reduce((acc, curr) => {
          return acc + curr.total_price;
        }, 0);

        // menampikan total product di cart detail
        const totalProduct = cart.cart_detail.reduce((acc, curr) => {
          return acc + curr.quantity;
        }, 0);

        // menampilkan semua attribute dari user customer
        const userCustomer = cart.user_customer;

        // menampilkan semua attribute dari cart detail
        const cartDetail = cart.cart_detail;

        // menampilkan semua attribute dari product
        const product = cart.cart_detail.product;

        // menampilkan semua attribute dari address
        const address = cart.user_customer.address;

        return {
          cart_id: cart.id,
          grand_price: grandPrice,
          total_product: totalProduct,
          id_user_customer: userCustomer.id,
          user_customer: {
            id: userCustomer.id,
            fullname: userCustomer.fullname,
            username: userCustomer.username,
            email: userCustomer.email,
            phone_number: userCustomer.phone_number,
            gender: userCustomer.gender,
            photo: userCustomer.upload_photo,
            address: address,
          },
          cart_detail: cartDetail,
          product: product,
        };
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getCartById: async (req, res) => {
    try {
      const { id } = req.params;
      let cart = await Cart.findByPk(id, {
        order: [["id", "DESC"]],

        include: [
          {
            model: Cart_detail,
            as: "cart_detail",
            include: [
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
          },
          {
            model: Users_customer,
            as: "user_customer",
            include: [
              {
                model: Address,
                as: "address",
              },
            ],
          },
        ],
      });

      if (!cart) {
        return res.status(200).json({
          message: "There is no cart data",
        });
      }

      const grandPrice = cart.cart_detail.reduce((acc, curr) => {
        return acc + curr.total_price;
      }, 0);

      // menampikan total product di cart detail
      const totalProduct = cart.cart_detail.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);

      // menampilkan semua attribute dari user customer
      const userCustomer = cart.user_customer;

      // menampilkan semua attribute dari cart detail
      const cartDetail = cart.cart_detail;

      // menampilkan semua attribute dari product
      const product = cart.cart_detail.product;

      // menampilkan semua attribute dari address
      const address = cart.user_customer.address;

      cart = {
        cart_id: cart.id,
        grand_price: grandPrice,
        total_product: totalProduct,
        user_customer: {
          fullname: userCustomer.fullname,
          username: userCustomer.username,
          email: userCustomer.email,
          phone_number: userCustomer.phone_number,
          gender: userCustomer.gender,
          photo: userCustomer.upload_photo,
          address: address,
        },
        cart_detail: cartDetail,
        product: product,
      };

      res.status(200).json(cart);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getCartByUserId: async (req, res) => {
    try {
      const { userId } = req.user;

      let cart = await Cart.findOne({
        order: [["id", "DESC"]],
        include: [
          {
            model: Cart_detail,
            as: "cart_detail",
            include: [
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
          },
          {
            model: Users_customer,
            as: "user_customer",
            include: [
              {
                model: Address,
                as: "address",
              },
            ],
          },
        ],
        where: {
          id_users_customer: userId,
        },
      });

      if (!cart) {
        return res.status(200).json({
          message: "There is no cart data",
        });
      }

      const grandPrice = cart.cart_detail.reduce((acc, curr) => {
        return acc + curr.total_price;
      }, 0);

      // menampikan total product di cart detail
      const totalProduct = cart.cart_detail.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);

      // menampilkan semua attribute dari user customer
      const userCustomer = cart.user_customer;

      // menampilkan semua attribute dari cart detail
      const cartDetail = cart.cart_detail;

      // menampilkan semua attribute dari product
      const product = cart.cart_detail.product;

      // menampilkan semua attribute dari address
      const address = cart.user_customer.address;

      cart = {
        cart_id: cart.id,
        grand_price: grandPrice,
        total_product: totalProduct,
        user_customer: {
          fullname: userCustomer.fullname,
          username: userCustomer.username,
          email: userCustomer.email,
          phone_number: userCustomer.phone_number,
          gender: userCustomer.gender,
          photo: userCustomer.upload_photo,
          address: address,
        },
        cart_detail: cartDetail,
        product: product,
      };

      res.status(200).json(cart);
    } catch (error) {
      console.log(error);
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
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = cartController;
