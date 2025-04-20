// Importa o módulo Router do Express para criar as rotas
import { Router } from 'express';

// Importa a classe MusicaController, que contém a lógica de manipulação das músicas
import MusicaController from '../controller/musicas.controller.js';

// Instancia a classe MusicaController para ser usada nas rotas
let musica = new MusicaController(); 

// Cria uma instância do Router para definir as rotas
const musicasRouter = Router();

// Rota para obter todas as músicas
musicasRouter.get('/', musica.getAllmusicas); 

// Rota para obter uma música pelo ID (usando o parâmetro :id na URL)
musicasRouter.get('/musica/:id', musica.getMusicaById); 

// Rota para obter músicas de um artista específico (usando o parâmetro :artista na URL)
musicasRouter.get('/musica/artista/:artista', musica.getMusicaByArtista); 

// Rota para obter músicas de um álbum específico (usando o parâmetro :album na URL)
musicasRouter.get('/musica/album/:album', musica.getMusicaByAlbum); 

// Rota para obter músicas de uma banda específica (usando o parâmetro :banda na URL)
musicasRouter.get('/musica/banda/:banda', musica.getMusicaByBanda); 

// Rota para obter músicas de um músico específico (usando o parâmetro :musico na URL)
musicasRouter.get('/musica/musico/:musico', musica.getMusicaByMusico); 

// Exporta o router para ser usado no arquivo principal da aplicação
export { musicasRouter };

 