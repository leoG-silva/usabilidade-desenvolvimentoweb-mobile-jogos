const http = require('http');
const fs = require('fs');
const path = require('path');
const { handlePostRequest } = require('./getrequest');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('C:\\Users\\LeonardoSilva\\Desktop\\repos\\usabilidade-desenvolvimentoweb-mobile-jogos\\src\\database\\petshop.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
});

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            const formFilePath = path.join(__dirname, './login.html');
            try {
                const data = fs.readFileSync(formFilePath, 'utf-8');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            } catch (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro interno do servidor');
            }
        } else if (req.url === '/login.css') {
            const cssFilePath = path.join(__dirname, './login.css');
            try {
                const cssData = fs.readFileSync(cssFilePath, 'utf-8');
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(cssData);
            } catch (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro interno do servidor');
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Página não encontrada');
        }
    } else if (req.method === 'POST' && req.url === '/mostrar') {
        db.run(
            "INSERT INTO Cliente (usuario, email, senha) VALUES (?, ?, ?)",
            [req.body.usuario, req.body.email, req.body.senha],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log("Dados inseridos com sucesso");
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Dados inseridos com sucesso');
            }
        );
    }
});


server.listen(3333, () => {
    console.log('Servidor em execução na porta 3333');
});