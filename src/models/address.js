"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Address extends Model {
		static associate(models) {
			// Address.belongsTo(models.Users_customer, {
			// 	foreignKey: "id_users_customer",
			// 	as: "users_customer",
			// });
			Address.hasMany(models.Nomor_resi, {
				foreignKey: "id_address",
				as: "nomor_resi",
			});
		}
	}
	Address.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			street: DataTypes.STRING,
			house_number: DataTypes.STRING,
			zipcode: DataTypes.STRING,
			city: DataTypes.STRING,
			province: DataTypes.STRING,
			id_users_customer: DataTypes.INTEGER,
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
			modelName: "Address",
			tableName: "Address",
			paranoid: true,
		}
	);
	return Address;
};

