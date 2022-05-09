'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(25)
    },
    hashedPassword: {
      allowNull: false,
      type: Sequelize.STRING.BINARY
    },
    firstName: {
      allowNull: false,
      type: Sequelize.STRING(25)
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING(25)
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(50)
    },
    bio: {
      type: Sequelize.STRING(255)
    },
    state: {
      allowNull: false,
      type: Sequelize.STRING(20)
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment, {foreignKey: "ownerId"});
    User.hasMany(models.Image, {foreignKey: "userId"});
    User.hasMany(models.Car, {foreignKey: "ownerId"});
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  return User;
};
