"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users_administrators extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_administrators.init(
    {
      id_users_administrators: DataTypes.INTEGER,
      username: DataTypes.STRING(20),
      email: DataTypes.STRING(255),
      password: DataTypes.STRING(100),
      upload_photo: DataTypes.TEXT,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Users_administrators",
    }
  );
  return Users_administrators;
};
