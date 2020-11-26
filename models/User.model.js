// Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create the scheeeemar

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  profilePicture: { type: String },
  level: { type: String, enum: ["SchoolBoy", "Happy Medium", "Absolute-boss"] },
  surfboard: [{ type: Schema.Types.ObjectId, ref: "Surfboard" }],
  weight: { type: String, enum: ["60-70", "70-80", "80-90", "90+"] },
  height: {
    type: String,
    enum: ["I'm above 160", "I'm above 170", "I'm above 180", "I'm a giant"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
