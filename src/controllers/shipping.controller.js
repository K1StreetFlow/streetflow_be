const { Shipping, Nomor_resi, Order_list, Address } = require("../models");

const getAllShipping = async (req, res) => {
	try {
		const shipping = await Shipping.findAll({
			include: [
				{
					model: Nomor_resi,
					as: "nomor_resi",
					include: [
						{
							model: Order_list,
							as: "order_list",
						},
						{
							model: Address,
							as: "address",
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
					model: Nomor_resi,
					as: "nomor_resi",
					attributes: ["id"],
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
		const shipping = await Shipping.update(body, {
			where: {
				id,
			},
		});

		if (shipping) {
			res.status(200).json({
				message: "Update Shipping Successfully",
				data: shipping,
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
};
