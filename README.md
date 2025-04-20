### 🎶 API-Músicos-Brasileiros

A **API-Músicos-Brasileiros** é uma API RESTful desenvolvida com o objetivo de reunir e disponibilizar, de forma estruturada, informações sobre a rica diversidade da música brasileira. Ela fornece dados organizados sobre artistas, bandas, álbuns e músicos que marcaram a história musical do país.

Além de funcionar como uma ferramenta de consulta e aprendizado, esta API busca valorizar a cultura nacional ao facilitar o acesso a informações relevantes sobre grandes nomes da música brasileira, tornando-se útil para projetos educacionais, culturais, sociais e aplicativos musicais.


---

### 🧠 Problema

O Brasil possui uma das cenas musicais mais ricas e diversas do mundo, com artistas que marcaram gerações e estilos que representam culturas de diversas regiões. No entanto, não existe uma API simples e acessível que organize e permita o acesso a informações básicas sobre músicos, bandas e álbuns da música brasileira de maneira didática, útil e integrada — principalmente para fins educativos, culturais e sociais.

Isso dificulta o desenvolvimento de sistemas que desejam valorizar a música nacional, principalmente em projetos escolares, culturais ou sociais.

---

### 💡 Solução

Criamos uma **API RESTful** que disponibiliza dados organizados sobre artistas, bandas, álbuns e músicos brasileiros. Essa API pode ser utilizada por:

- Estudantes e professores em projetos educativos;
- Desenvolvedores que queiram integrar dados musicais em suas aplicações;
- Projetos sociais e culturais voltados à valorização da música brasileira;
- Aplicações web ou mobile que queiram trabalhar com playlists, sugestões ou filtros musicais.

A API possui diversas rotas **GET**, como:

- Buscar todas as músicas;
- Buscar por artista, banda, músico ou álbum;
- Buscar música específica por ID.

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


## 🎯 Objetivos

- Facilitar o acesso a dados da música brasileira;

- Ser base para aplicações educacionais ou culturais;

- Valorizar músicos nacionais e sua diversidade.



