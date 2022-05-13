'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    make: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING
    },
    accidents: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    features: {
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users"}
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {foreignKey: "postId",onDelete: "CASCADE",hooks:true});
    Post.belongsTo(models.User, {foreignKey: "ownerId"});
    Post.hasMany(models.Image, {foreignKey: "postId",onDelete: "CASCADE",hooks:true});
  };
  return Post;
};
