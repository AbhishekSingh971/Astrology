const mongoose = require("mongoose");

const AntardashaModel = mongoose.Schema({
  nesting: {
    type: Number,
    default: "2",
  },
  type : {
    type: String,
    default: 'antardasha'
  },
  key : {
    type: String,
    default: "SaSa"
  },
  duration: {
    type: Number,
    default: "94933831",
  },
  start: {
    type: Date,
    default : "1996-01-11 12:46:21"
  },
  end: {
    type: Date,
    default : "1999-01-14 07:16:52"
  }
//   periods: {
//     type : mongoose.ObjectId,
//     ref : 'Pratyantardasha'
//   }
});

module.exports = mongoose.model("Antardasha", AntardashaModel)
