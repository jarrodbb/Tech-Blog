const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentsRoutes = require("./commentsRoutes");
const blogRoutes = require("./blogRoutes");

router.use("/user", userRoutes);
router.use("/blog", blogRoutes);
router.use("/comment", commentsRoutes);

module.exports = router;
