"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Order_list", [
			{
				code_order: "TS-001",
				id_payment: 1,
				id_cart_details: 1,
				status_order: "Unpaid",
			},
			{
				code_order: "TS-002",
				id_payment: 2,
				id_cart_details: 2,
				status_order: "Unpaid",
			},
			{
				code_order: "TS-003",
				id_payment: 3,
				id_cart_details: 3,
				status_order: "Unpaid",
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Order_list", null, {});
	},
};

