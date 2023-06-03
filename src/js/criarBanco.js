var sqlite3 = require('sqlite3').verbose();
const database = 'C://Users//LeonardoSilva//Desktop//repos//usabilidade-desenvolvimentoweb-mobile-jogos//src//database//petshop.db'
//Cria um novo banco de dados
var db = new sqlite3.Database(database);

db.run("CREATE TABLE IF NOT EXISTS Cliente " +
    "( id INTEGER PRIMARY KEY AUTOINCREMENT," + // campo não nulo autoincremento
    "usuario VARCHAR (20) NOT NULL," + // nome do user 
    "email VARCHAR(40)," +
    "senha VARCHAR (20))");

db.run("CREATE TABLE IF NOT EXISTS Pet " +
    "( id INTEGER PRIMARY KEY AUTOINCREMENT," + // campo não nulo autoincremento
    "nome VARCHAR (20) NOT NULL," + // nome 
    "idade INT," +
    "raca VARCHAR(20)," +
    "regiao VARCHAR (40))");

db.run(
    // Adicionar um novo Cliente no banco
    "INSERT INTO Cliente (usuario, email, senha) " +
    "VALUES('Gustavo', 'gustavoteste0@gmail.com', 'Testes123')");

db.run(
    // Adicionar um novo Cliente no banco
    "INSERT INTO Pet (nome, idade, raca, regiao) " +
    "VALUES('Mel', 5, 'shih tzu', 'sbc')");

