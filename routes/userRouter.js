const express = require("express");
const userRouter = express.Router();
const User = require("./../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");
const Surfboard = require("./../models/Surfboard.model");


    userRouter.get('/profile', isLoggedIn, (req, res, next) => {
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


userRouter.get('/edituser', isLoggedIn, (req, res, next) => {
      const currUser = req.session.currentUser._id;
      User.findOne({ '_id': req.query.user_id })
          .then((user) => {
              res.render('Edituser', { user })
          })
          .catch((err) => {
              console.log(err)
              next(err)
          });
    });
    
    userRouter.post('/edituser', isLoggedIn, (req, res, next) => {
          
      const { username, password, level, weight, height } = req.body;
      let userId = req.query.user_id;
      
      User.findById({ '_id': req.query.user_id })
          .then(currentUser => {
             
          
          
              User.update({ '_id': req.query.user_id }, userUpdated)
                  .then(() => User.findById(userId))
                  .then(userUpdated => {
    
                      res.redirect(`/dashboard/${userId}`);
                  })
                  .catch(error => console.log(error));
          });
    });

module.exports = userRouter;
    
    