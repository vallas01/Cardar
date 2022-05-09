'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
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
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {foreignKey: "postId"});
    Post.belongsTo(models.User, {foreignKey: "ownerId"});
    Post.hasMany(models.Image, {foreignKey: "postId"});
  };
  return Post;
};
