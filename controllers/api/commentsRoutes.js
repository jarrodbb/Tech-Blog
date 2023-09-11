// Routers for comments

// Import from express
const router = require('express').Router();

//Import Models
const { Comments } = require('../../models');

// Import Authentication
const withAuth = require('../../utils/auth');

//Router to create a comment
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comments.create({
      comment_description: req.body.comment_description,

      user_username: req.body.user_username,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
    });

    req.session.save(() => {
      // Save session as logged in
      req.session.logged_in = true;

      res.json(commentData);
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Router to get all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comments.findAll();

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Router to delete a comment by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comments.destroy({
      where: {
        comment_id: req.params.id,
      },
    });

    if (!commentData) {
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

//Export routers
module.exports = router;
