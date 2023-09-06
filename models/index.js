const User = require("./User");
const Blog = require("./Blog");
const Comments = require("./Comments");

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "Set Null",
});

Comments.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comments, {
  foreignKey: "comment_id",
});

User.hasMany(Comments, {
  foreignKey: "user_id",
});

Comments.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = { User, Blog, Comments };
