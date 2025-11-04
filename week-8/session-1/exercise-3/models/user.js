const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

// Export Post model
module.exports = User;
