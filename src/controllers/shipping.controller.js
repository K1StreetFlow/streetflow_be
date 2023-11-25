const {
	Shipping,
	Order_list,
	Address,
	Payment,
	Users_customer,
	Cart_detail,
	Product,
	PhotoProduct,
	Cart,
} = require("../models");

const getAllShipping = async (req, res) => {
	try {
		const shipping = await Shipping.findAll({
			include: [
				{
					model: Order_list,
					as: "order_list",
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
									model: Users_customer,
									as: "user_customer",
								},
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
				},
				{
					model: Address,
					as: "address",
					include: [
						{
							model: Users_customer,
							as: "user_customer",
						},
					],
				},
			],
		});

		if (shipping) {
			res.status(200).json({
				message: "Get All Shipping Successfully",
				data: shipping,
			});
		} else {
			res.status(404).json({ message: "Get All Shipping Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getShippingById = async (req, res) => {
	try {
		const { id } = req.params;
		const shipping = await Shipping.findOne({
			where: {
				id,
			},
			include: [
				{
					model: Order_list,
					as: "order_list",
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
				},
				{
					model: Address,
					as: "address",
					include: [
						{
							model: Users_customer,
							as: "user_customer",
						},
					],
				},
			],
		});

		if (shipping) {
			res.status(200).json({
				message: "Get Shipping Successfully",
				data: shipping,
			});
		} else {
			res.status(404).json({ message: "Get Shipping Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getShippingByIdUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { userId } = req.user;

		const shipping = await Shipping.findOne({
			where: {
				id,
			},
			include: [
				{
					model: Order_list,
					as: "order_list",
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
				},
				{
					model: Address,
					as: "address",
					include: [
						{
							model: Users_customer,
							as: "user_customer",
							// Add where clause to filter by user ID
							where: {
								id: userId,
							},
						},
					],
				},
			],
		});

		if (shipping) {
			res.status(200).json({
				message: "Get Shipping Successfully",
				data: shipping,
			});
		} else {
			res.status(404).json({ message: "Get Shipping Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const createShipping = async (req, res) => {
	try {
		const { body } = req;
		const shipping = await Shipping.create(body);

		if (shipping) {
			res.status(200).json({
				message: "Create Shipping Successfully",
				data: shipping,
			});
		} else {
			res.status(404).json({ message: "Create Shipping Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const updateShipping = async (req, res) => {
	try {
		const { body } = req;
		const { id } = req.params;
		const [updated] = await Shipping.update(body, {
			where: {
				id,
			},
		});

		if (updated) {
			const updatedShipping = await Shipping.findOne({ where: { id } });
			res.status(200).json({
				message: "Update Shipping Successfully",
				data: updatedShipping,
			});
		} else {
			res.status(404).json({ message: "Update Shipping Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const updateShippingAndOrderList = async (req, res) => {
	try {
		const { body } = req;
		const { id } = req.params;
		const [updated] = await Shipping.update(body, {
			where: {
				id,
			},
		});

		if (updated) {
			const updatedShipping = await Shipping.findOne({ where: { id } });

			const [updatedOrderList] = await Order_list.update(
				{ status_order: req.body.status_order },
				{
					where: {
						id: updatedShipping.id_order_list,
					},
				}
			);

			if (!updatedOrderList) {
				return res.status(404).json({ message: "Update Order List Failed" });
			}

			const updatedOrder = await Order_list.findOne({ where: { id: updatedShipping.id_order_list } });

			res.status(200).json({
				message: "Update Shipping and Order List Successfully",
				data: {
					shipping: updatedShipping,
					orderList: updatedOrder,
				},
			});
		} else {
			res.status(404).json({ message: "Update Shipping Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const deleteShipping = async (req, res) => {
	try {
		const { id } = req.params;
		const shipping = await Shipping.destroy({
			where: {
				id,
			},
		});

		if (shipping) {
			res.status(200).json({
				message: "Delete Shipping Successfully",
				data: shipping,
			});
		} else {
			res.status(404).json({ message: "Delete Shipping Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
	getAllShipping,
	getShippingById,
	createShipping,
	updateShipping,
	deleteShipping,
	updateShippingAndOrderList,
	getShippingByIdUser,
};
