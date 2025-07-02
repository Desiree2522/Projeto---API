// Importa o framework Express para criar o servidor
import express from 'express';

// Importa o router com todas as rotas relacionadas às músicas
import { musicasRouter } from './router/musica.routes.js';

// Importa as dependências do Swagger
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Configuração básica do Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Músicas',
    version: '1.0.0',
    description: 'Documentação da API CRUD de músicas',
  },
};

const options = {
  swaggerDefinition,
  // Caminho dos arquivos com as anotações Swagger
  apis: ['./src/controller/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

// Cria a instância principal da aplicação
const app = express();

// Define a porta do servidor
const PORT = 3000;

// Permitir que a API entenda JSON no corpo das requisições
app.use(express.json());

// Rota para acessar a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usa as rotas definidas no musicasRouter
// Aqui, todas as rotas serão acessíveis a partir da raiz ("/")
app.use('/', musicasRouter);

// Inicializa o servidor, ouvindo na porta definida
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs em http://localhost:${PORT}/api-docs`);
});