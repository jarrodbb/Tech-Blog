const router = require("express").Router();

//Import Models
const { User, Blog, Comments } = require("../models");
const withAuth = require("../utils/auth");

//Router to render the homepage
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signup", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

router.get("/comment-add/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    console.log(blog);

    res.render("addComment", {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userDate = await User.findByPk(req.session.user_id, {
      include: [{ model: Blog }],
    });

    const user = userDate.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/createblog", withAuth, async (req, res) => {
  res.render("newBlog", {
    logged_in: req.session.logged_in,
  });
});

router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    console.log(blog);

    res.render("editblog", {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
