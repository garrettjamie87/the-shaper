const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surfBoardSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", default: null },
  description:{type: String},
  color: { type: String, enum: ["yellow", "white", "black"] },
  height: { type: String, enum: ["option1", "option2", "option3"] },
  width: { type: String },
  thickness: { type: String },
  volume: { type: String },
  noseShape: { type: String, enum: ["rounded", "pointed"] },
  taleShape: { type: String, enum: ["rounded", "square", "triangle"] },
  level: { type: String, enum: ["SchoolBoy", "Happy Medium", "Absolute-boss"] },
  name: { type: String },
  url: { type: String }
});

const Surfboard = mongoose.model("Surfboard", surfBoardSchema);

module.exports = Surfboard;
