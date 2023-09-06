const router = require("express").Router();

//Import Models
const { User, Blog, Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      user_id: req.body.user_id,
    });

    req.session.save(() => {
      req.session.logged_in = true;

      res.json(blogData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    if (!blogData) {
      res.status(404).json({ message: "No blog found !" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
