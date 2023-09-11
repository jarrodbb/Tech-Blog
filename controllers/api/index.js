//  Create and export routes

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const blogRoutes = require('./blogRoutes');

//User routes
router.use('/user', userRoutes);
//Blog routes
router.use('/blog', blogRoutes);
//Comment Routes
router.use('/comment', commentsRoutes);

// Export Routes
module.exports = router;
