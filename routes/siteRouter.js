const express = require("express");
const siteRouter = express.Router();
const User = require("./../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");
const Surfboard = require("./../models/Surfboard.model");

siteRouter.get("/selection", isLoggedIn, (req, res, next) => {
  const { level } = req.session.currentUser;
  Surfboard.find({level })
    .then((allSelectedboards) => {
      const props = { boards: allSelectedboards };
      res.render("Recommend", props);
    })
    .catch((err) => console.log(err));
});


siteRouter.get("/dashboard", isLoggedIn, (req, res, next) => {
const currUser = req.session.currentUser._id;
  User.findById(currUser)
    .then((user) => {
      Surfboard.find({author: null}).then((surfboards) => {
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

//renders details page
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




module.exports = siteRouter;