# Tech-Blog

Create blogs and add your own comment

## Description

The Tech-Blog is a CMS-style application that allows a user to publish their blogs. The Tech-Blog is an interactive site that allows users to post comments on other user's blog posts. A user is given the ability to update and delete ONLY their own posts.

Each BLOG post and COMMENT tacks the time of publishing along with the respective username.

Additional features include the ability to view EVERY comments linked to a specific blog post.

A user is given the ability to view all THEIR comments for a specific blog post only after a comment has been posted. When viewing their comments for a blog post they are given the ability to DELETE the comment.

The site tracks a user session and uses authentication. A User MUST sign-in or sign-up to access the features of the site

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

The Tech-Blog is a deployed application please see below link to view the site.

### Deployed Link

[Tech-Blog](https://understanding-tech-blog-eefe5bbb75c4.herokuapp.com/)

[GIF](https://github.com/jarrodbb/Tech-Blog/blob/main/assets/Untitled_%20Sep%2010%2C%202023%2012_27%20PM.gif)

### MVC

[Models](https://github.com/jarrodbb/Tech-Blog/tree/main/models)

[Views](https://github.com/jarrodbb/Tech-Blog/tree/main/views)

[Controllers](https://github.com/jarrodbb/Tech-Blog/tree/main/controllers)

### Additional Folders

[Config](https://github.com/jarrodbb/Tech-Blog/tree/main/config)

[Public](https://github.com/jarrodbb/Tech-Blog/tree/main/public)

[Seeds](https://github.com/jarrodbb/Tech-Blog/tree/main/seeds)

[Utils](https://github.com/jarrodbb/Tech-Blog/tree/main/utils)

### Technologies Used

- bcrypt: ^5.0.0

- express: ^4.17.1

- browserify: ^17.0.0

- connect-session-sequelize: ^7.0.4

- express-handlebars: ^5.2.0

- express-session: ^1.17.1

- sequelize: ^5.21.7

- mysql2: ^2.1.0

- dotenv: ^8.2.0

### Note:

.gitignore added to include node_modules and .env

## Usage

### Login
<img width="1691" alt="Screenshot 2023-09-10 at 12 50 40 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/69f9e264-8317-4b5d-bece-82e59f52c4b1">

### Sign up
<img width="1691" alt="Screenshot 2023-09-10 at 12 51 09 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/7543843e-4b64-4ebf-843d-17e3b0bf8195">

### Dashboard
<img width="1694" alt="Screenshot 2023-09-10 at 12 51 22 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/c8e578cb-0fd4-43fa-b30c-ad4202c59287">

### Add blog
<img width="1714" alt="Screenshot 2023-09-10 at 12 52 24 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/35f359af-3e21-446f-bbb2-185fdc1a499f">

### Dashboard with Blog
<img width="1703" alt="Screenshot 2023-09-10 at 12 52 38 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/0a40259f-2ce5-4b73-b7a7-fbda65d8724e">

### Homepage. Displays all Blogs from all users
<img width="1702" alt="Screenshot 2023-09-10 at 12 52 50 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/039bd54a-85b0-4410-8d2c-1dfe5541e4d8">

### Add comment
<img width="1712" alt="Screenshot 2023-09-10 at 12 54 06 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/3c318dfc-4bc7-4265-99c9-e742de917406">

### Post with new comment
<img width="1700" alt="Screenshot 2023-09-10 at 12 54 16 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/bedcc3e7-a705-4dd3-924b-effb0fbc6595">

### Click comment button for the blog post. To view All comments. Click "See all comments for this post Here."
<img width="1704" alt="Screenshot 2023-09-10 at 1 13 43 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/7caefb37-21b3-4836-8885-26081e27ba92">

### All comments for that Blog
<img width="1692" alt="Screenshot 2023-09-10 at 12 56 14 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/72cbae21-9581-44af-98de-1d9fdcc2827c">

### Click Add a new comment
<img width="1687" alt="Screenshot 2023-09-10 at 1 19 37 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/c14b064a-ff52-4e70-ae5d-3f555a8b1dca">

### Post with new comment (All comments made by the logged in user are display)
<img width="1682" alt="Screenshot 2023-09-10 at 1 21 03 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/7fa6bf76-52d9-44e9-a6cf-be83b38024b4">

### Delete Comment
<img width="1705" alt="Screenshot 2023-09-10 at 1 21 18 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/5c98a486-672c-42bb-a5c3-b1cdc75d5378">

### When viewing All comments for a blog post, the delete comment will be removed. The button to add a comment is displayed at the bottom
<img width="1690" alt="Screenshot 2023-09-10 at 1 21 48 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/4ed3e6f1-a44f-4dac-ae7f-1e1ab7d5f09d">

### Update Blog post created by logged in user via Dashboard
<img width="1703" alt="Screenshot 2023-09-10 at 12 57 00 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/805bde02-e52f-4617-9c58-715bed4d3ea6">

### Update Blog / Delete Blog. Directed back to Dashboard
<img width="1699" alt="Screenshot 2023-09-10 at 12 57 09 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/4e44c486-359b-47c9-8f0e-5a01b7c07fdd">

### Update Blog / Delete Blog. Directed back to Dashboard
<img width="1703" alt="Screenshot 2023-09-10 at 12 57 00 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/de5d7c7b-6d63-4fea-acc1-b6b06d5233ea">

### Blog not visible on Dashboard after deleting
<img width="1693" alt="Screenshot 2023-09-10 at 12 57 40 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/445bd2f6-935c-404b-992c-fa9da265a2a4">

### Blog not visible on Homepage after deleting
<img width="1689" alt="Screenshot 2023-09-10 at 12 58 05 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/90554be7-b202-46ac-a8c8-a97dc69b7ef6">

### Log out. User directed to Homepage.
<img width="1693" alt="Screenshot 2023-09-10 at 12 58 16 pm" src="https://github.com/jarrodbb/Tech-Blog/assets/132813348/a91f46bc-d35b-42bc-a03b-b152eacc89e9">

### The user will be prompted to login in if they want to access the site's features.

## License

Please refer to the licence in the repo.
