const express = require('express');
const conexao = require('./conexao');

const app = express();
const port = 3000;

app.use(express.json()); // Para parsear JSON no corpo das requisições

app.post('/salvar-ficha', (req, res) => {
    const { 
        nome, idade, detalhe, objetivo, arco, olhos, cabelo, corpo, acessorio, estilo, defeito, qualidade, motiva, medo, gerais, origem, admira, repudio, moral, rompimento } = req.body; // Campos de exemplo
        
    const query = 'INSERT INTO personagens (nome, idade, detalhe, objetivo, arco, olhos, cabelo, corpo, acessorio, estilo, defeito, qualidade, motiva, medo, gerais, origem, admira, repudio, moral, rompimento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    conexao.query(query, [nome, idade, detalhe, objetivo, arco, olhos, cabelo, corpo, acessorio, estilo, defeito, qualidade, motiva, medo, gerais, origem, admira, repudio, moral, rompimento], (err, results) => {
        if (err) {
            console.error('Erro ao salvar no banco de dados: ', err);
            res.status(500).send('Erro ao salvar no banco de dados');
        } else {
            res.send('Ficha salva com sucesso!');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
