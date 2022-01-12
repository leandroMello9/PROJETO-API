const express = require("express");

const app = express();

app.use(express.json());
// GET
// POST
// DELETE
// PUT

//{ name: "Leandro", sobrenome: "souza"  }

let users = [];

//main router
app.get("/", function (request, response) {
  return response.send("<h1>Hello World</h1>");
});

//get param name and return html
app.get("/myname/:name", function (request, response) {
  const name = request.params.name;
  return response.send(`<h1>${name}</h1>`);
});
//create User
app.post("/createUser", function (request, response) {
  const { name, lastname, rg } = request.body;

  const user = {
    name,
    lastname,
    rg,
    id: String(Math.random()),
  };
  users.push(user);
  return response.status(201).json(user);
});

// Listen all users
app.get("/getAllUsers", function (request, response) {
  return response.status(200).json(users);
});
// Remove a user
app.delete("/deleteUser/:user_id", function (request, response) {
  const { user_id } = request.params;
  const filterUser = users.filter((user) => user.id !== user_id);
  users = filterUser;
  return response.status(200).json(filterUser);
});
app.listen(3000, function () {
  console.log("Server is running in port 3000");
});
