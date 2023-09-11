// seed Comments
//Import model
const { Comments } = require('../models');

//This application proved more successful when no seed data was included for the comments
const commentData = [
  // {
  //   comment_id: 1,
  //   comment_description: "agreed, super important",
  //   date: "2023-05-06",
  //   user_username: "bloglover",
  //   user_id: 2,
  //   blog_id: 1,
  // },
  // {
  //   comment_id: 2,
  //   comment_description: "Watch out for merge conflicts",
  //   date: "2023-07-07",
  //   user_username: "techwiz",
  //   user_id: 1,
  //   blog_id: 2,
  // },
  // {
  //   comment_id: 3,
  //   comment_description: "Google has good fixes for pull requests",
  //   date: "2023-08-08",
  //   user_username: "codechamp",
  //   user_id: 3,
  //   blog_id: 2,
  // },
];

const seedComment = () => Comments.bulkCreate(commentData);

//Export
module.exports = seedComment;
