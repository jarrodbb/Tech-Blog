// API Routes for Blogs

const router = require('express').Router();

//Import Models
const { User, Blog } = require('../../models');

//Import authentication
const withAuth = require('../../utils/auth');

// Route to create Blog
// Need to be logged in
router.post('/', withAuth, async (req, res) => {
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

// Route to Get Blog
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User, attributes: ['username'] }],
    });
    if (!blogData) {
      res.status(404).json({ message: 'No blog found !' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to get a specific Blog by ID
router.get('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }],
    });
    if (!blogData) {
      res.status(404).json({ message: 'No blog found !' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to update Blog
// Checks if logged in
router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
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
      res.status(404).json({ message: 'No Blog with this id' });
      return;
    }

    req.session.save(() => {
      // Save session as logged in
      req.session.logged_in = true;

      res.json({ message: 'updated!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Router to delete Blog by ID
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
      // Save session as logged in
      req.session.logged_in = true;

      res.json({ message: 'deleted!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Export routers
module.exports = router;
