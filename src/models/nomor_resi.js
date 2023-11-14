"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Nomor_resi extends Model {
		static associate(models) {
			Nomor_resi.belongsTo(models.Order_list, {
				foreignKey: "id_order_list",
				as: "order_list",
			});
			Nomor_resi.belongsTo(models.Address, {
				foreignKey: "id_address",
				as: "address",
			});
			Nomor_resi.hasMany(models.Shipping, {
				foreignKey: "id_nomer_resi",
				as: "shipping",
			});
		}
	}
	Nomor_resi.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			id_order_list: DataTypes.INTEGER,
			id_address: DataTypes.INTEGER,
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
			modelName: "Nomor_resi",
			tableName: "Nomor_resi",
			paranoid: true,
		}
	);
	return Nomor_resi;
};

