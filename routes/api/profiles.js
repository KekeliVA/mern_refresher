const express = require("express");
const router = express.Router();

/**
 * now we don't do app.get etc, we just do:
 * before every route we describe 3 things
 * request type
 * description of what the route does
 * access level
 * */

// @route  GET api/profile
// @desc   TEST route
// @access Public
router.get("/", (req, res) => res.send("profile route"));

// missed this the first time around and it leads to a TypeError "requires a middleware function, but got an object"
module.exports = router;
