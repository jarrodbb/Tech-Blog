// Home routes

// Import from express
const router = require('express').Router();

//Import Models
const { User, Blog, Comments } = require('../models');

// Import authentication
const withAuth = require('../utils/auth');

//Router to render the homepage
//include Blogs and Users
//Render homepage
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Router to render dashboard if logged in, else render login page
router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

//Router to render signup page, else if logged in render signup page
router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

// Router to get One blog and user
// Renders "addComment" page
router.get('/comment-add/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    console.log(blog);

    res.render('addComment', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Router for Dashboard
// Gets User by session ID and includes all their blogs
// Renders Dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userDate = await User.findByPk(req.session.user_id, {
      include: [{ model: Blog }],
    });

    const user = userDate.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//Router to render New Blog page
router.get('/createblog', withAuth, async (req, res) => {
  res.render('newBlog', {
    logged_in: req.session.logged_in,
  });
});

//Router gets one Blog by req params and includes user
// Renders page to edit blog
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    console.log(blog);

    res.render('editblog', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Router for comments
// Gets one blog by req params
// includes comments and user
// Renders Page with all comments for that blog
router.get('/blog/comments/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
        },
        { model: User },
      ],
    });

    const blog = blogData.get({ plain: true });

    console.log(blog);

    res.render('blogWithAllComments', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//Router to get one blog by req params
//Include comments and user
// Renders page with comment made by user
router.get('/blogWithComment/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          where: { user_id: req.session.user_id },
        },
        { model: User },
      ],
    });

    const blog = blogData.get({ plain: true });

    console.log(blog);

    res.render('blogWithNewComment', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Export routers
module.exports = router;
