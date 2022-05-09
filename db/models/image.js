'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    path: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    carId: {
      type: Sequelize.INTEGER,
      references: {model: "Cars"}
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {model: "Users"}
    },
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Car, {foreignKey: "carId"});
    Image.belongsTo(models.User, {foreignKey: "userId"});
  };
  return Image;
};
