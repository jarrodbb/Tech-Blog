// seed Users
const { User } = require("../models");

const userData = [
  {
    username: "techwiz",
    email: "tech@gmail.com",
    password: "pass123",
  },
  {
    username: "bloglover",
    email: "lover@gmail.com",
    password: "123456",
  },
  {
    username: "codechamp",
    email: "code@gmail.com",
    password: "password1",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
