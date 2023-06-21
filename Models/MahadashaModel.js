const mongoose = require("mongoose");

const MhadashaModel = mongoose.Schema({
  nesting: {
    type: Number,
    default: "1",
  },
  type : {
    type: String,
    default: 'mahadasha'
  },
  key : {
    type: String,
    default: "Sa"
  },
  duration: {
    type: Number,
    default: "599582088",
  },
  start: {
    type: Date,
    default : "1996-01-11 12:46:21"
  },
  end: {
    type: Date,
    default : "2015-01-11 03:21:09"
  },
  periods: {
    type : mongoose.ObjectId,
    ref : 'Antardasha'
  }
});

module.exports = mongoose.model("Mahadasha", MhadashaModel)
