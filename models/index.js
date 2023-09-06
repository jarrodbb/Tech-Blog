const User = require("./User");
const Blog = require("./Blog");
const Comments = require("./Comments");

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Blog, {
  foreignKey: "blog_id",
});

Blog.hasMany(Comments, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = { User, Blog, Comments };
