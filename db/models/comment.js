'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    postId: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {model: "Cars"}
    },
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
