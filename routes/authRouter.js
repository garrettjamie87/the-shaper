const express = require("express");
const authRouter = express.Router();
const User = require("./../models/User.model");
const bcrypt = require("bcrypt");
const isLoggedIn = require("../utils/isLoggedIn");
const saltRounds = 10;

//************************************* */ SIGNUP ROUTE ********************************************

// GET /auth/signup  - Render the Signup form
authRouter.get('/signup', (req, res, next) => {
  res.render('Signup');
});

// POST /auth/signup  - Receiving data from the Signup form
authRouter.post("/signup", (req, res, next) => {
  // Get username, password, image, level, surfboard, weight and height from req.body
  const { username, password, level, weight, height } = req.body;

  // Validate that username and password are not empty strings
  if (username === "" || password === "") {
    const props = {
      errorMessage: "Please provide a username and password",
    };
    res.render("Signup", props);
    return;
  }

  // Check if username is unique
  User.findOne({
    username,
  }).then((user) => {
    if (user) {
      // If username is taken:
      const props = {
        errorMessage: "Username is taken. Choose another one.",
      };
      res.render("Signup", props);
      return;
    }
    // If username is available:
    // Hash the password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    // Create new user and redirect
    User.create({
      username: username,
      password: hashPassword,
      level: level,
      weight: weight,
      height: height,
    }).then((createdUser) => {
      req.session.currentUser = createdUser;

      res.redirect("/selection");
    });
  });
});

/*************************************LOGIN ROUTE *********************************************/

//RENDER login page

authRouter.get("/login", (req, res, next) => {
  res.render("Login");
});

// POST  /auth/login   - Receives the data from the POST Login form
authRouter.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    const props = {
      errorMessage: "Indicate username and password",
    };

    res.render("Login", props);
    return;
  }

  User.findOne({
    username,
  }).then((user) => {
    if (!user) {
      // If the user by the given `username` was not found, send error message
      const props = {
        errorMessage: "The username doesn't exist",
      };

      res.render("Login", props);
      return;
    }

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (passwordCorrect) {
      // Create the session - which also triggers the creation of the cookie
      req.session.currentUser = user;

      res.redirect("/selection");
    } else {
      res.render("Login", {
        errorMessage: "Incorrect password",
      });
    }
  });
});

//*************************************LOGOUT*********************************************** */

authRouter.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.render("Error");
    } else {
      res.redirect("/auth/login");
    }
  });
});

module.exports = authRouter;
