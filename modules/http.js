//'HTTP -> CRIANDO UM SERVIDOR

const http = require("http");
const { json } = require("stream/consumers");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>home page</h1>");
  }

  if (req.url == "/users") {
    const users = [
      {
        nome: "John Doe",
        email: "john@doe.com",
      },
      {
        nome: "Jane Doe",
        email: "jane@doe.com",
      },
    ];
    res.writeHead(200, { "content-type": "application/json" });

    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log("Rodando na porta ", port));
