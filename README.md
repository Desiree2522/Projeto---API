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
```bash
npm run dev
```

Rodando com node:
```bash
npm start
```

📌 Endpoints da API (GET)
🔹 GET
```bash
 /musicas
```
Retorna todos os músicos cadastrados.

🔹 GET 
 ```bash
 /musicas/:id
```
Retorna os dados de um músico específico pelo ID.

🔹 GET 
```bash
/musicas/artista/:nome
```
Retorna os dados de um artista específico pelo nome.
Exemplo: GET /musicas/artista/Elis Regina

🔹 GET 
```bash
/musicas/banda/:banda
```
Retorna todos os músicos de uma determinada banda.
Exemplo: GET /musicas/banda/O Rappa

🔹 GET 
```bash
/musicas/instrumento/:tipo
```
Retorna todos os músicos de um determinado instrumento.


## 📄 Observações
Esta API foi desenvolvida para fins educacionais.

Todos os dados são mockados (armazenados em um array local).

Requisições POST, PUT e DELETE não estão implementadas nesta versão.
