'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: {
      allowNull: false,
      type: Sequelize.STRING(255)
    },
    carId: {
      allowNull: false,
      type: Sequelize.STRING,
      references: {model: "Cars"}
    },
    ownerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: "Users"}
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {foreignKey: "ownerId"});
    Comment.belongsTo(models.Post, {foreignKey: "postId"});
  };
  return Comment;
};
