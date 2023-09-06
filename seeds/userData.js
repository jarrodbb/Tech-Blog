// seed Users
const { User } = require("../models");

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

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
