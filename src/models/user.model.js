const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 7 },
});

//' Convenção -> Nome do Model em letra maiúscula
const UserModel = mongoose.model("User", userSchema);
//-> Ordem do metodo .model -> 1º - O nome do Model, depois, o schema, nesse caso, userSchema

module.exports = UserModel;
