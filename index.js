const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, mundo! Meu primeiro projeto com Node.js e Express.');
});

// Rota /ola/:nome
app.get('/ola/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}! Seja bem-vindo(a)!`);
});

// Rota /boa-noite/:nome
app.get('/boa-noite/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Boa noite, ${nome}! Tenha um bom descanso.`);
});

// Rota dinâmica com saudação baseada na hora
app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;
  const hora = new Date().getHours();

  let saudacao;
  if (hora >= 6 && hora < 18) {
    saudacao = 'Bom dia';
  } else {
    saudacao = 'Boa noite';
  }

  res.send(`${saudacao}, ${nome}!`);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
