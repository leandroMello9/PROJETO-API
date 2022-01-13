const userRoutes = require("express").Router();
const userController = require("../controllers/User");

userRoutes.post("/createUser", userController.store);

// Listen all users
userRoutes.get("/getAllUsers", userController.index);
// Remove a user
userRoutes.delete("/deleteUser/:user_id", userController.deleted);

module.exports = userRoutes;
