require("dotenv").config();

const mongoose = require('mongoose');
const Surfboard = require("./../models/Surfboard.model");
const User = require("./../models/User.model");
const surfboards = require("./surfboards-mock-data");


//SEED SEQUENCE:
//CONNECT TO MONGODB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then(() => {
    //AFTER CONNECTION, DROP THE EXISTING DATABASE
    const pr = Surfboard.create(surfboards);
    return pr;

  })

  .then(()=>{
    mongoose.connection.close();

  });


