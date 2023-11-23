const {
  Order_list,
  Payment,
  Cart,
  Cart_detail,
  Product,
  Users_customer,
  Address,
} = require("../models");

const getAllOrder = async (req, res) => {
  try {
    const orderList = await Order_list.findAll({
      include: [
        {
          model: Payment,
          as: "payment",
        },
        {
          model: Cart,
          as: "cart",
        },
      ],
    });

    if (orderList) {
      res.status(200).json({
        message: "Get All Order List Successfully",
        data: orderList,
      });
    } else {
      res.status(404).json({ message: "Get All Order List Failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderList = await Order_list.findOne({
      where: {
        id,
      },
      include: [
        // {
        //   model: Payment,
        //   as: "payment",
        // },
        {
          model: Cart,
          as: "cart",
          include: [
            {
              model: Cart_detail,
              as: "cart_detail",
              include: [
                {
                  model: Product,
                  as: "product",
                },
              ],
            },
            // {
            //   model: Users_customer,
            //   as: "user_customer",
            //   include: [
            //     {
            //       model: Address,
            //       as: "address",
            //     },
            //   ],
            // },
          ],
        },
      ],
    });

    if (orderList) {
      res.status(200).json({
        message: "Get Order List Successfully",
        data: orderList,
      });
    } else {
      res.status(404).json({ message: "Get Order List Failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createOrder = async (req, res) => {
  try {
    const orderList = await Order_list.create(req.body);

    if (orderList) {
      res.status(200).json({
        message: "Create Order List Successfully",
        data: orderList,
      });
    } else {
      res.status(404).json({ message: "Create Order List Failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateOrder = async (req, res) => {
  try {
    const [updated] = await Order_list.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedOrder = await Order_list.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).json({
        message: "Update Order List Successfully",
        data: updatedOrder,
      });
    }

    return res.status(404).json({ message: "Update Order List Failed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderList = await Order_list.destroy({
      where: { id: req.params.id },
    });

    if (orderList) {
      res.status(200).json({
        message: "Delete Order List Successfully",
        data: orderList,
      });
    } else {
      res.status(404).json({ message: "Delete Order List Failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllOrder,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
