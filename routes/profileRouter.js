const express = require("express");
const userRouter = express.Router();
const User = require("./../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");



    userRouter.get('/', isLoggedIn, (req, res, next) => {
      const currUser = req.session.currentUser._id;
      User.findOne({ '_id': currUser })
          .then((user) => {
                console.log(user)
              res.render('Profile', { user })
          })
          .catch((err) => {
              console.log(err)
              next(err)
          })
    })



module.exports = userRouter;
    
    