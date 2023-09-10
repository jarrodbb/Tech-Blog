// Routes for users

// Import from express
const router = require("express").Router();

//Import Models
const { User, Blog } = require("../../models");

// Import Authentication
const withAuth = require("../../utils/auth");

//Route to create new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,

      password: req.body.password,
    });

    req.session.save(() => {
      //Save session id
      req.session.user_id = userData.user_id;
      //Save as logged in
      req.session.logged_in = true;

      res.json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Router to get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      //save session ID
      req.session.user_id = userData.user_id;

      console.log(req.session.user_id);
      //Save as logged in
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Router to get one user by session ID 
// Requires authentication
router.get("/all", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_id: req.session.user_id },
    });

    req.session.save(() => {
      console.log(req.session.user_id);
      // Save as logged in
      req.session.logged_in = true;

      res.json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get user by ID using req.params
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Blog }],
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Router to log user out
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Export routers
module.exports = router;
