"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Address extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Address.belongsTo(models.Users_customer, {
				foreignKey: "id_users_customer",
				as: "user_customer",
			});
			Address.hasMany(models.Shipping, {
				foreignKey: "id_address",
				as: "shipping",
			});
		}
	}
	Address.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			id_users_customer: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			street: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			house_number: {
				type: DataTypes.STRING(20),
				allowNull: true,
			},
			zipcode: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			city: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			province: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				allowNull: false,
			},
			deletedAt: {
				type: DataTypes.DATE,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: "Address",
			paranoid: true,
			tableName: "Address",
		}
	);

	return Address;
};
