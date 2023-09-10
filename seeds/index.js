//Import connection
const sequelize = require("../config/connection");

//Import seed function for User, blogs and comments
const seedUser = require("./userData");
const seedComment = require("./commentData");
const seedBlog = require("./blogData");

//Function to seed
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  await seedComment();

  process.exit(0);
};

//Call function
seedAll();
