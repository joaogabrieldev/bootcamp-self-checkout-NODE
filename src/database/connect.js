const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.vka8f36.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    return console.log("Conexão com o Banco de Dados feita com Sucesso");
  } catch (error) {
    return console.log(
      "[ERRO] Ocorreu um erro ao se conectar com o banco de dados",
      error
    );
  }
};

module.exports = connectToDatabase;
