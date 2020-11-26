const express = require("express");
const siteRouter = express.Router();
const User = require("./../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");
const Surfboard = require("./../models/Surfboard.model");

siteRouter.get("/selection", isLoggedIn, (req, res, next) => {
  const { level } = req.session.currentUser;
  Surfboard.find({
    level,
  })
    .then((allSelectedboards) => {
      const props = {
        boards: allSelectedboards,
      };
      res.render("Recommend", props);
    })
    .catch((err) => console.log(err));
});

siteRouter.get("/dashboard", isLoggedIn, (req, res, next) => {
  const currUser = req.session.currentUser._id;
  User.findById(currUser)
    .then((user) => {
      Surfboard.find({ author: null }).then((surfboards) => {
        console.log(surfboards);
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

//create a new board
siteRouter.get("/create", (req, res, next) => {
  res.render("Create");
});
siteRouter.post("/create", isLoggedIn, (req, res, next) => {
  const _id = req.session.currentUser._id;

  const {
    description,
    color,
    height,
    width,
    thickness,
    volume,
    noseShape,
    taleShape,
    name,
  } = req.body;

  Surfboard.create({
    author: _id,
    description,
    color,
    height,
    width,
    thickness,
    volume,
    noseShape,
    taleShape,
    name,
  })
    .then((newBoard) => {
      console.log("newBoard", newBoard);
      User.findByIdAndUpdate(_id, { $push: { surfboard: newBoard._id } }).then(
        () => {
          res.redirect("/dashboard");
        }
      );
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

//renders details page
siteRouter.get("/detail/:surfboardId", isLoggedIn, function (req, res, next) {
  console.log(req.params.id);

  const userId = req.session.currentUser._id;

  Surfboard.findById(req.params.surfboardId)
    .then((surfboard) => {
      console.log("*****", surfboard);

      User.findById(userId).then((user) => {
        const props = {
          surfboard: surfboard,
          user: user,
        };
        res.render("Detail", props);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

siteRouter.get("/deletepost/:postId", isLoggedIn, (req, res, next) => {
  const postId = req.params.postId;
  Surfboard.findByIdAndDelete(postId)
    .then((post) => {
      res.redirect("/user/profile");
    })
    .catch((err) => console.log(error));
});

siteRouter.post("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const _id = req.session.currentUser._id;
    const { id } = req.params;
    const isBuy = await User.findOne({ surfboard: id });
    if (isBuy) {
      res.redirect("/dashboard");
      return;
    }
    await User.updateOne(
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
    );
    //req.session.currentUser = await User.findOne({ _id });
    res.redirect("/user/profile");
  } catch (error) {
    console.log(error);
    next(error);
    return;
  }
});


module.exports = siteRouter;
