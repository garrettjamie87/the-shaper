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
      console.log(currUser);
      User.findById(currUser )
          .then((user) => {
              res.render('Edituser', { user })
          })
          .catch((err) => {
              console.log(err)
              next(err)
          });
    });
    
    userRouter.post('/edituser', isLoggedIn, (req, res, next) => {
        const currUser = req.session.currentUser._id;  
      const { username, level, weight, height } = req.body;
      
      
      User.findByIdAndUpdate(currUser,{username, level, weight, height},{new:true})
          .then(updatedUser => {
             console.log("Updated User",updatedUser)
            res.redirect("/dashboard")
             
          })
          .catch((err) => {
            console.log(err)
            next(err)
        });
    });

module.exports = userRouter;
    
    