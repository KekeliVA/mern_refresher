const express = require("express");
const router = express.Router();

/**
 * now we don't do app.get etc, we just do:
 * before every route we describe 3 things
 * request type
 * description of what the route does
 * access level
 * */

// @route  GET api/users
// @desc   register user
// @access public
router.post("/", (req, res) => {
  // in order for req.body to work, we need to initialize the body parser in our middleware which is now included in express
  console.log(req.body);
  res.send("users route");
});

module.exports = router;
