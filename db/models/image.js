'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    path: DataTypes.STRING,
    name: DataTypes.STRING,
    carId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};