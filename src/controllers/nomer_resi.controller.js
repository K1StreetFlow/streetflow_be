const { Nomor_resi, Order_list, Address } = require("../models");

const getAllNomor_resi = async (req, res) => {
	try {
		const nomor_resi = await Nomor_resi.findAll({
			include: [
				{
					model: Order_list,
					as: "order_list",
					attributes: ["id"],
				},
				{
					model: Address,
					as: "address",
					attributes: ["id"],
				},
			],
		});

		if (nomor_resi) {
			res.status(200).json({
				message: "Get All Nomor_resi Successfully",
				data: nomor_resi,
			});
		} else {
			res.status(404).json({ message: "Get All Nomor_resi Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getNomor_resiById = async (req, res) => {
	try {
		const { id } = req.params;
		const nomor_resi = await Nomor_resi.findOne({
			where: {
				id,
			},
			include: [
				{
					model: Order_list,
					as: "order_list",
					attributes: ["id"],
				},
				{
					model: Address,
					as: "address",
					attributes: ["id"],
				},
			],
		});

		if (nomor_resi) {
			res.status(200).json({
				message: "Get Nomor_resi Successfully",
				data: nomor_resi,
			});
		} else {
			res.status(404).json({ message: "Get Nomor_resi Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const createNomor_resi = async (req, res) => {
	try {
		const { body } = req;
		const nomor_resi = await Nomor_resi.create(body);

		if (nomor_resi) {
			res.status(200).json({
				message: "Create Nomor_resi Successfully",
				data: nomor_resi,
			});
		} else {
			res.status(404).json({ message: "Create Nomor_resi Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const updateNomor_resi = async (req, res) => {
	try {
		const { body } = req;
		const { id } = req.params;
		const nomor_resi = await Nomor_resi.update(body, {
			where: {
				id,
			},
		});

		if (nomor_resi) {
			res.status(200).json({
				message: "Update Nomor_resi Successfully",
				data: nomor_resi,
			});
		} else {
			res.status(404).json({ message: "Update Nomor_resi Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const deleteNomor_resi = async (req, res) => {
	try {
		const { id } = req.params;
		const nomor_resi = await Nomor_resi.destroy({
			where: {
				id,
			},
		});

		if (nomor_resi) {
			res.status(200).json({
				message: "Delete Nomor_resi Successfully",
				data: nomor_resi,
			});
		} else {
			res.status(404).json({ message: "Delete Nomor_resi Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
	getAllNomor_resi,
	getNomor_resiById,
	createNomor_resi,
	updateNomor_resi,
	deleteNomor_resi,
};
