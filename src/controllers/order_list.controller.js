const {
	Order_list,
	Payment,
	Cart_detail,
	Product,
	Cart,
	PhotoProduct,
	Shipping,
	Users_customer,
} = require("../models");
const cron = require("node-cron");

// This function will run every 10 minutes
cron.schedule("*/20 * * * * *", async () => {
	try {
		await Order_list.update({ status_order: "Packaged" }, { where: { status_order: "Paid" } });
		console.log("Orders updated to Packaged successfully");
	} catch (error) {
		console.error("Failed to update orders", error);
	}
});

// This function will run every 20 minutes
cron.schedule("*/30 * * * * *", async () => {
	try {
		await Order_list.update({ status_order: "Delivered" }, { where: { status_order: "Packaged" } });
		console.log("Orders updated to Delivered successfully");
	} catch (error) {
		console.error("Failed to update orders", error);
	}
});

// This function will run every 30 minutes
cron.schedule("*/40 * * * * *", async () => {
	try {
		await Order_list.update({ status_order: "Completed" }, { where: { status_order: "Delivered" } });
		console.log("Orders updated to Completed successfully");
	} catch (error) {
		console.error("Failed to update orders", error);
	}
});

function generateOrderCode() {
	return "ORDER-" + Date.now();
}

function generateShippingCode() {
	return "INV-" + Date.now();
}

const getUserOrder = async (req, res) => {
	try {
		const { userId } = req.user;
		const orderList = await Order_list.findAll({
			where: {
				id_users_customer: userId,
			},
			include: [
				{
					model: Users_customer,
					as: "user_customer",
				},
				{
					model: Shipping,
					as: "shipping",
				},
				{
					model: Payment,
					as: "payment",
				},
				{
					model: Cart,
					as: "cart",
					attributes: ["id", "id_users_customer"],
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

const getAllOrder = async (req, res) => {
	try {
		const orderList = await Order_list.findAll({
			include: [
				{
					model: Payment,
					as: "payment",
				},
				{
					model: Users_customer,
					as: "user_customer",
				},
				{
					model: Cart,
					as: "cart",
					attributes: ["id", "id_users_customer"],
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
					],
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

const getAllOrderUser = async (req, res) => {
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
					attributes: ["id", "id_users_customer"],
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
					],
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
				{
					model: Shipping,
					as: "shipping",
				},
				{
					model: Payment,
					as: "payment",
				},
				{
					model: Users_customer,
					as: "user_customer",
				},
				{
					model: Cart,
					as: "cart",
					attributes: ["id", "id_users_customer"],
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

const getOrderByIdUser = async (req, res) => {
	try {
		const { id } = req.params;
		const orderList = await Order_list.findOne({
			where: {
				id,
			},
			include: [
				{
					model: Payment,
					as: "payment",
				},
				{
					model: Cart,
					as: "cart",
					attributes: ["id", "id_users_customer"],
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

const createOrderAndShipping = async (req, res) => {
	try {
		const code_order = generateOrderCode();
		const { id: orderId, id_payment, id_cart_details, status_order, id_users_customer } = req.body; // Extracting order_list attributes from req.body

		const newOrder = {
			id: orderId,
			code_order,
			id_payment,
			id_cart_details,
			id_users_customer,
			status_order,
		};

		// Create a new order list entry
		const orderList = await Order_list.create(newOrder);

		if (!orderList) {
			return res.status(404).json({ message: "Create Order List Failed" });
		}

		const receipt_number = generateShippingCode();
		const { id: shippingId, id_address } = req.body; // Extracting shipping attributes from req.body

		const newShipping = {
			id: shippingId,
			name_courier: "JNE",
			receipt_number,
			id_order_list: orderList.id,
			id_address,
		};

		const shipping = await Shipping.create(newShipping);

		if (!shipping) {
			return res.status(404).json({ message: "Create Shipping Failed" });
		}

		res.status(200).json({
			message: "Create Order List and Shipping Successfully",
			data: {
				orderList,
				shipping,
			},
		});
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
	createOrderAndShipping,
	updateOrder,
	deleteOrder,
	getAllOrderUser,
	getOrderByIdUser,
	getUserOrder,
};
