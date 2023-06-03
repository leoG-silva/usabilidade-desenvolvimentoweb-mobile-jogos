var express = require('express');
const http = require('http');
var bodyParses = require('body-parser');
var path = require('path');
var app = express();

var sqlite3 = require('sqlite3').verbose();
const database = 'C://Users//LeonardoSilva//Desktop//repos//usabilidade-desenvolvimentoweb-mobile-jogos//src//database//petshop.db'
//Cria um novo banco de dados
var db = new sqlite3.Database(database);

const hostname = '127.0.0.1'; // localhost
const port = 3333; // Porta da aplicação

app.use(bodyParses.urlencoded({ extended: false }));
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.listen(port, function (req, res) {
    console.log("Servidor está rodando");
});

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.sendFile(__dirname + "/menu.html");
});

app.get('/login', function (req, res) {
    res.statusCode = 200;
    res.sendFile(__dirname + "/login.html")
});

app.post("/crud", async (req, res) => {
    db.serialize(() => {

        var email = req.body.email;
        var senha = req.body.senha;
        db.each(`SELECT email, senha FROM Cliente WHERE email = '?' and senha = '?'`),
        [email, senha],

            function (err) {
                if (err) {
                    res.send("Erro ao encontrar email");
                    return console.error(err.message);
                }
            }

        //if incorreto, devemos ajustar
        if (req.body.email == email && req.body.senha == senha) {
            res.sendFile(__dirname + '/crud.html')
            console.log("Usuario logado");
        } else {
            console.log("Usuario ou senha inválida")
        }
    });
});