const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'RUStillDizzy',
    password: 'rustilldizzy?314160',
    database: 'projeto_hero'
});

conexao.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

module.exports = conexao;
