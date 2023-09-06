const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedComment = require("./commentData");
const seedBlog = require("./blogData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  await seedComment();

  process.exit(0);
};

seedAll();
