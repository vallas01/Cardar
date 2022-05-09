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
    postId: {
      type: Sequelize.INTEGER,
      references: {model: "Posts"}
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Car, {foreignKey: "postId"});
  };
  return Image;
};
