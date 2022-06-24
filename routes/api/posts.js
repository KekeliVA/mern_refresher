const express = require("express");
const router = express.Router();

/**
 * now we don't do app.get etc, we just do:
 * before every route we describe 3 things
 * request type
 * description of what the route does
 * access level
 * */

// @route  GET api/post
// @desc   TEST route
// @access Public
router.get("/", (req, res) => res.send("posts route"));

module.exports = router;
