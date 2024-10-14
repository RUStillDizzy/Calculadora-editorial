const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    user: 'RUStillDizzy',
    password: 'rustilldizzy?314160',
    database: 'projeto_hero',
    port: 3306,
});

conexao.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

module.exports = conexao;
