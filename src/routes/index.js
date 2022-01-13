const express = require("express");
const mainRoutes = express();
const usersRoutes = require("./User")

mainRoutes.use("/user", usersRoutes)

module.exports = mainRoutes