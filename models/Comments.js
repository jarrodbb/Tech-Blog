const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    user_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,

      references: {
        model: "user",
        key: "user_id",
      },
    },
    blog_id: {
      type: DataTypes.INTEGER,

      references: {
        model: "blog",
        key: "blog_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comments",
  }
);

module.exports = Comments;
