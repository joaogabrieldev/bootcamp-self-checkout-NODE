//? O QUE É O NODE.JS?

//' 1- AMBIENTE QUE PERMITE EXECUTAR CODIGOS JAVASCRIPT FORA DO NAVEGADOR

//'2- Utiliza a mesma Engine (Motor) do google chrome

//'3- Utilizado para construir API'S

//? COMO O NODE FUNCIONA?

//' POSSUI UM NUCLEO DE OPERAÇÕES (single threaded)

//' MAS SUPORTA VARIAS OPERAÇÕES SIMULTANES (non-blocking)

//? VANTAGENS DO NODE

//' Ótimo uso de memoria 

//' Harmonia com o front-end (ambas usam javascript)

//' Muito Rápido, Simples, Escalável

//' Presença extremamente forte no mercado

//? MÓDULOS NO NODE.JS

//' Podemos criar nossos proprios modulos (arquivos) e importá-los

//' O node vem com modulos pré-instalados(path, fs, http, etc.)

//* Para importar modulos, utilizamo CommonJS. Ex.:
const path = require('path')

//* Importando arquivos
const meuArquivo = require('./meu-arquivo.js')

//? NPM - NODE PACKAGE MANAGER

//' Podemos instalar módulos de terceiros utilizando o NPM

//' Esses modulos ficam armazenados numa pasta chamada "node_modules"

//' Um arquivo chamado "package.json" lista todos os modulos instalados pelo NPM

//* Comandos NPM importantes (Em ordem): 

//-> npm init -> Cria o package.json

//-> npm install -> Instala um pacote localmente

//-> npm -g install // Instala um pacote globalmente