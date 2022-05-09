'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    make: DataTypes.STRING,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    accidents: DataTypes.INTEGER,
    features: DataTypes.STRING,
    description: DataTypes.STRING,
    imageId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
    Car
  };
  return Car;
};
