import express from 'express';
import { musicasRouter } from './router/musica.routes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors'; // Importe o pacote cors

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
  apis: ['./src/controller/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();
const PORT = 3000;

// Configuração do CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://seusite.com'], // Domínios permitidos
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permite cookies e autenticação
  optionsSuccessStatus: 204
};

// Aplica o middleware CORS antes de outros middlewares
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', musicasRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs em http://localhost:${PORT}/api-docs`);
});