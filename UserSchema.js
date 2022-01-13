const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,

  rg: String,

  lastname: String,
},{
    timestamp: true
});

const userModel = mongoose.model("User", UserSchema)


module.exports = userModel
