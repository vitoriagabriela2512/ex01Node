# ex01Node
# 👋 Projeto "Olá Usuário" com Node.js e Express

Este projeto cria um servidor básico com Node.js e Express que retorna saudações personalizadas ao usuário via rota.

## 📁 Nome do repositório sugerido

`ola-usuario-express`

## 🎯 Objetivo

Criar uma aplicação simples com rotas que retornam saudações personalizadas com base no nome e na hora do servidor.

## 🚀 Tecnologias usadas

- Node.js
- Express
- Nodemon (para desenvolvimento)

## 🛠️ Funcionalidades

- `GET /ola/:nome`: Retorna uma saudação "Bom dia" ou "Boa noite" dependendo da hora e nome informado.
- `GET /boa-noite/:nome`: Sempre retorna "Boa noite, <nome>!".

## ▶️ Como executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ola-usuario-express.git
cd ola-usuario-express

# Instale as dependências
npm install

# Execute com nodemon (modo dev)
npm run dev

# Ou execute normalmente
npm start
