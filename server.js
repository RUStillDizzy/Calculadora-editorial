const express = require('express');
const bodyParser = require('body-parser');
const conexao = require('./conexao');

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Para parsear JSON no corpo das requisições
app.use(bodyParser.urlencoded({ extended: true })); // Para parsear dados de formulários
app.use(express.static('public')); // Para servir arquivos estáticos como seu HTML e CSS

// Rota para salvar personagem
app.post('/salvar-personagem', (req, res) => {
    const { 
        nome, idade, detalhe, objetivo, arco, olhos, cabelo, corpo, acessorio, estilo, defeito, qualidade, motiva, medo, gerais, origem, admira, repudio, moral, rompimento 
    } = req.body; // Campos de exemplo

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !detalhe || !objetivo || !arco) {
        return res.status(400).send('Campos obrigatórios não preenchidos.');
    }

    const query = 'INSERT INTO personagens (nome, idade, detalhe, objetivo, arco, olhos, cabelo, corpo, acessorio, estilo, defeito, qualidade, motiva, medo, gerais, origem, admira, repudio, moral, rompimento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // Executa a query para salvar no banco de dados
    conexao.query(query, [nome, idade, detalhe, objetivo, arco, olhos, cabelo, corpo, acessorio, estilo, defeito, qualidade, motiva, medo, gerais, origem, admira, repudio, moral, rompimento], (err, results) => {
        if (err) {
            console.error('Erro ao salvar no banco de dados', err);
            return res.status(500).send('Erro ao salvar no banco de dados.');
        }

        res.status(200).send('Personagem salvo com sucesso!');
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
