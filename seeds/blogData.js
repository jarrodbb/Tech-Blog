// seed Blog
//Import model
const { Blog } = require("../models");

const blogData = [
  {
    title: "The importance of MVC",
    description:
      "MVC is an industry standard for file managment to allow for a cleaner code base",
    date: "2023-05-05",
    user_id: 1,
  },
  {
    title: "Understanding the dark arts of Github",
    description:
      "Only a select few understand what's actually happening. It's magic",
    date: "2023-06-06",
    user_id: 2,
  },
];
//Create blogs
const seedBlog = () => Blog.bulkCreate(blogData);

//Export
module.exports = seedBlog;
