'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    model: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    make: {
      allowNull: false,
      type: Sequelize.STRING(20)
    },
    year: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    color: {
      allowNull: false,
      type: Sequelize.STRING
    },
    accidents: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    features: {
      type: Sequelize.STRING
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING
    },
    ownerId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "Users"}
    }
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
    Car.hasMany(models.Comment, {foreignKey: "carId"});
    Car.belongsTo(models.User, {foreignKey: "ownerId"});
    Car.hasMany(models.Image, {foreignKey: "carId"});
  };
  return Car;
};
