const express = require("express");

const app = express();
const mainRoutes = require("./routes/index");

app.use(express.json());

app.use(mainRoutes);

module.exports = app;
