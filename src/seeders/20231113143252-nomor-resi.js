"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Nomor_resi", [
			{
				id_order_list: 1,
				id_address: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id_order_list: 2,
				id_address: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id_order_list: 3,
				id_address: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Nomor_resi", null, {});
	},
};

