const express = require("express");
const siteRouter = express.Router();
const User = require("./../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");
const Surfboard = require("./../models/Surfboard.model");


siteRouter.get("/dashboard", isLoggedIn, (req, res, next) => {
const currUser = req.session.currentUser._id;
  User.findById(currUser)
    .then((user) => {
      //console.log("user", user);
      Surfboard.find().then((surfboards) => {
        res.render("Dashboard", {
          user,
          surfboards,
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
// siteRouter.get("/private", isLoggedIn, (req, res, next) => {
//   const userIsLoggedIn = Boolean(req.session.currentUser);
//   const props = {
//     userIsLoggedIn
//   };
//   res.render("Private", props);
// });

//create a new board
siteRouter.get("/create", (req, res, next) => {
  res.render("Create");
});
siteRouter.post("/create",  async (req, res, next) => {
  try {
    const { _id } = req.session.currentUser;
    console.log(_id);
   const newBoard = await Surfboard.create({
      ...req.body,
      author:_id
    });
    console.log('newBoard', newBoard)
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});


siteRouter.get("/:id/detail", isLoggedIn, function (req, res, next) {
  console.log(req.params.id);
  Surfboard.findById(req.params.id)
    .then((el) => {
      res.render("Detail", el);
    })
    .catch((error) => {
      console.log(error);
    });
});

siteRouter.post("/:id", isLoggedIn, function (req, res, next) {
  const _id = req.session.currentUser._id;
  const { id } = req.params;
  User.updateOne(
    {
      _id,
    },
    {
      $push: {
        surfboard: req.params.id,
      },
    },
    {
      new: true,
    }
  )
    .then((updatedUser) => {
      console.log(updatedUser);
      res.redirect("/order");
    })
    .catch((err) => {
      console.log(err);
    });
});
siteRouter.get("/order", (req, res, next) => {
  res.render("Order");
});



siteRouter.get('/edituser', (req, res, next) => {
  const userId = req.session.currentUser._id
  User.findOne({ '_id': req.query.user_id })
      .then((user) => {
          res.render('Edituser', { user })
      })
      .catch((err) => {
          console.log(err)
          next(err)
      })
})

siteRouter.post('/edituser', (req, res, next) => {

  let userId = req.query.user_id;
  


  User.findById({ '_id': req.query.user_id })
      .then(theUserProfile => {
         
          const { username, password, level, weight, height } = req.body;
      
      
          User.update({ '_id': req.query.user_id }, userUpdated)
              .then(() => User.findById(userId))
              .then(userUpdated => {

                  res.redirect(`/profile/${userId}`);
              })
              .catch(error => console.log(error));
      });
});







module.exports = siteRouter;