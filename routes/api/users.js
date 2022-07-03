const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

/**
 * now we don't do app.get etc, we just do:
 * before every route we describe 3 things
 * request type
 * description of what the route does
 * access level
 * the goal of this file is to send file from the request to the route
 * */

// @route  GET api/users
// @desc   register user
// @access public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // in order for req.body to work, we need to initialize the body parser in our middleware which is now included in express
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // you can destructure the body object so you don't have to keep doing req.body, which is pretty cool
    const { name, email, password } = req.body;

    try {
      // see if user exists
      // findOne is a mongoDB method
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: errors.array() });
      }

      // get gravatar
      const avatar = gravatar.url(email, {
        // options for default gravatar settings
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // save user to database (returns a promise)
      await user.save();

      // return jswebtoken
      res.send("user registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
