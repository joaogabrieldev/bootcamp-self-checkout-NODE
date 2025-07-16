//' PATH -> manipular e normalizar caminhos de arquivos e diretórios de uma maneira que funcione em qualquer sistema operacional.

const path = require("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Apenas o nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do Arquivo
console.log(path.extname(__filename));

//Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));
