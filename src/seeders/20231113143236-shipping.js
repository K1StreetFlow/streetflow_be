"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Shipping", [
			{
				name_courier: "John",
				receipt_number: 1,
				id_order_list: 1,
				id_address: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				name_courier: "Doel",
				receipt_number: 2,
				id_order_list: 2,
				id_address: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				name_courier: "Dadang",
				receipt_number: 3,
				id_order_list: 3,
				id_address: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Shipping", null, {});
	},
};