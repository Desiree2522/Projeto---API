// Importa o framework Express para criar o servidor
import express from 'express'; 

// Importa o router com todas as rotas relacionadas às músicas
import {musicasRouter} from './router/musica.routes.js';

// Cria a instância principal da aplicação
const app = express(); 

// Define a porta do servidor
const PORT = 3000; 

//permitir que a API entenda JSON no corpo das requisições
app.use(express.json()); 

// Usa as rotas definidas no musicasRouter
// Aqui, todas as rotas serão acessíveis a partir da raiz ("/")
app.use('/', musicasRouter );

// Inicializa o servidor, ouvindo na porta definida
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});

