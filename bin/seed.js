const mongoose = require('mongoose');
const Surfboard = require("./../models/Surfboard.model");
const User = require("./../models/User.model");
const surfboards = require("./surfboards-mock-data");

const DB_NAME = "TheShaper_DB";

//SEED SEQUENCE:
//CONNECT TO MONGODB
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
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

  })
  .then(() => {
    //CREATE USERS
    const promise = User.create(/*Pass array with users to create*/);
    return promise;
  })
  .then((createdUsers) => {
    // Update the surfboards author field
    const updatedSurfboards = surfboards.map((surfObj, i) => {
      const user = createdUsers[i];
      surfObj.author = user._id;

      return surfObj;
  
    });
    
    const promise = Surfboard.create(updatedSurfboards);
    
    return promise;


  });


