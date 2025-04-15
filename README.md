# 🎶 API-Músicos-Brasileiros

Esta é uma API RESTful criada com Node.js e Express que disponibiliza informações sobre músicos brasileiros, incluindo nome do artista, banda, instrumento, música de destaque e álbuns.  
Todas as requisições são do tipo **GET**.

---

## 🚀 Tecnologias utilizadas

- Node.js  
- Express  
- Nodemon  

---

## 🧑💻 Como rodar o projeto

1. Instale as dependências:
```bash
npm install express nodemon

```
2.Execute o servidor:

Rodando com node:
npm run dev

Rodando com node:
npm start

```

📌 Endpoints da API (GET)
🔹 GET /musicas
Retorna todos os músicos cadastrados.

🔹 GET /musicas/:id
Retorna os dados de um músico específico pelo ID.

🔹 GET /musicas/artista/:nome
Retorna os dados de um artista específico pelo nome.
Exemplo: GET /musicas/artista/Elis Regina

🔹 GET /musicas/banda/:banda
Retorna todos os músicos de uma determinada banda.
Exemplo: GET /musicas/banda/O Rappa

🔹 GET /musicas/instrumento/:tipo
Retorna todos os músicos de um determinado instrumento.

```
####📄 Observações
Esta API foi desenvolvida para fins educacionais.

Todos os dados são mockados (armazenados em um array local).

Requisições POST, PUT e DELETE não estão implementadas nesta versão.
