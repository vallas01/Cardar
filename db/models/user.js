const bcrypt = require('bcryptjs');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(25)
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(25)
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(25)
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50)
    },
    bio: {
      type: DataTypes.STRING(255)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(20)
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment, {foreignKey: "ownerId"});
    User.hasMany(models.Post, {foreignKey: "ownerId"});
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  return User;
};
