//spare code 

//EDIT/UPDATE
// siteRouter.get('/:ID/edit', function (req, res, next) {
//   console.log(req.params.ID)
//   Surfboard.findById(req.params.ID).then((el) => {
//     res.render("Detail", el)
//   }).catch((error) => {
//     console.log(error);
//   });
// });
// siteRouter.post("/:ID/edit", (req, res, next) => {
//   const { surboardID } = req.query;
//   const { title, weight, name, height } = req.body;
//   Surfboards.findOneAndUpdate(
//     surboardID,
//     { title, weight, name, height },
//     { new: true }
//     //{new : true} is used to get the updated document version returned after the update
//   )
//     .then((updatedSurfboard) => {
//       console.log("surfboard document after the update", updatedSurfboard);
//       res.redirect("/dashboard");
//     })
//     .catch((error) => console.error(error));
// });

