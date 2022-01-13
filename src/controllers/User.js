// STORE, INDEX, DELETE, UPDATED
const userModel = require("../../UserSchema");

const store = async (request, response) => {
  const { name, lastname, rg } = request.body;
  const user = await userModel.create({
    name,
    lastname,
    rg,
  });

  return response.status(201).json(user);
};
const index = async (request, response) => {
    const users = await userModel.find();
    return response.status(200).json(users);
};
const deleted = async (request, response) => {
    const { user_id } = request.params;
    const deleteUser = await userModel.findByIdAndDelete(user_id);
    return response.status(200).json(deleteUser);
}

module.exports = {
    store,
    index,
    deleted
}