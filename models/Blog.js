const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    
      references: {
        model: "user",
        key: "user_id",
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
     
      references: {
        model: "comments",
        key: "comment_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
