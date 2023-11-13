"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Shipping extends Model {
		static associate(models) {
			// Shipping.belongsTo(models.Nomor_resi, {
			// 	foreignKey: "id_nomer_resi",
			// 	as: "nomor_resi",
			// });
		}
	}
	Shipping.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name_courier: DataTypes.STRING,
			receipt_number: DataTypes.STRING,
			id_nomer_resi: DataTypes.INTEGER,
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			deletedAt: {
				allowNull: true,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Shipping",
			tableName: "Shipping",
			paranoid: true,
		}
	);
	return Shipping;
};

