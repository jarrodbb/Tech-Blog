//Import Models
const User = require("./User");
const Blog = require("./Blog");
const Comments = require("./Comments");

//Define realtionships
//Define Foreign Keys
//Define what to do when deleted
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
  onDelete: "SET NULL",
});

Blog.hasMany(Comments, {
  foreignKey: "blog_id",
  onDelete: "SET NULL",
});

//Export relationships
module.exports = { User, Blog, Comments };
