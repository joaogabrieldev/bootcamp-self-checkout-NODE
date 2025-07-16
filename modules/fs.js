//' File System (FS)

const { error } = require("console");
const fs = require("fs");
const path = require("path");

//-> Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//       return console.log("[ERRO]: ", error)
//     }

//     console.log("Pasta criada com sucesso")
// })

// //-> Criar um arquivo
// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Hello Node!",
//   (error) => {
//     if (error) {
//       return console.log("[ERRO]: ", error);
//     }
//     console.log("Arquivo Criado com Sucesso!");

//     //-> Adicionar um arquivo
//     fs.appendFile(
//       path.join(__dirname, "/test", "test2.txt"),
//       "Hello Node",
//       (error) => {
//         if (error) {
//           return console.log("[ERRO]: ", error);
//         }

//         return console.log("Arquivo Adicionado com Sucesso");
//       }
//     );

//     //-> Adicionar conteúdo a um arquivo
//     fs.appendFile(
//       path.join(__dirname, "/test", "test.txt"),
//       "Hello Node",
//       (error) => {
//         if (error) {
//           return console.log("[ERRO]: ", error);
//         }

//         return console.log(`Conteudo Adicionado com Sucesso ao Arquivo!`);
//       }
//     );

//     // Ler arquivo

//     fs.readFile(
//       path.join(__dirname, "/test", "test.txt"),
//       "utf-8",
//       (error, data) => {
//         if (error) {
//           return console.log("[ERRO]", error);
//         }
//         return console.log(data);
//       }
//     );
//   }
// );
