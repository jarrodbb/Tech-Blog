// Import from express
const router = require("express").Router();

//import API routes
const apiRoutes = require("./api");

// Import Home routes
const homeRoutes = require("./homeRoutes");

// Assign
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

//Export
module.exports = router;
