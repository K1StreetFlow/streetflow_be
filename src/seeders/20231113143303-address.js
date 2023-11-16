"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Address", [
			{
				street: "Jl. Jalan",
				house_number: "XI",
				zipcode: "111",
				city: "Bandung",
				province: "Jawa Barat",
				id_users_customer: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				street: "Jl. Jalan Bunga",
				house_number: "X",
				zipcode: "222",
				city: "Surabaya",
				province: "Jawa Timur",
				id_users_customer: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				street: "Jl. Jalan Buah",
				house_number: "VII",
				zipcode: "333",
				city: "Purwokerto",
				province: "Jawa Tengah",
				id_users_customer: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Address", null, {});
	},
};