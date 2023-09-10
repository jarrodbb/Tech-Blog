// seed Users
//Import model
const { User } = require("../models");

//User data
const userData = [
  {
    username: "techwiz",

    password: "pass123",
  },
  {
    username: "bloglover",

    password: "123456",
  },
  {
    username: "codechamp",

    password: "password1",
  },
];

//seed user
const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//Export
module.exports = seedUser;
