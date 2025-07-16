//' Express.js -> Usado para construir aplicações web e APIs (integrações)

const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.set("views", "src/views");

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  // console.log(req.body);

  next();
});

app.get("/views/users", async (req, res) => {
  const users5 = await UserModel.find({});
  res.render("index", { users: users5 });
});

//? READ
//' .GET -> Para resgatar
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
    //' O objeto vazio traz tudo do banco de dados
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user2 = await UserModel.findById(id);

    return res.status(200).json(user2);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//? CREATE
//' POST -> Para criar usuario
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//? UPDATE
//' .PATCH -> Para atualizar o registro parcialmente
//' .PUT -> Para atualizar o registro por completo

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user3 = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user3);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//? DELETE
//' DELETE -> Para deletar algo do usuario ou o usuario
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user4 = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user4);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
