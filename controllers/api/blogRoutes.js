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
      user_id: req.session.user_id,
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

router.get("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
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

router.put("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
        // approved: req.body.approved,
        title: req.body.title,
        description: req.body.description,
        date: req.body.newDate,
      },
      {
        where: {
          blog_id: req.params.id,
        },
      }
    );

    if (!blogData[0]) {
      res.status(404).json({ message: "No Blog with this id" });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;

      res.json({ message: "updated!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        blog_id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;

      res.json({ message: 'deleted!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
