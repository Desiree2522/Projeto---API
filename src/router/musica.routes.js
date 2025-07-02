import { Router } from 'express';
import MusicaController from '../controller/musicas.controller.js';

let musica = new MusicaController(); 
const musicasRouter = Router();

musicasRouter.get('/', musica.getAllmusicas); 
musicasRouter.get('/musica/:id', musica.getMusicaById); 
musicasRouter.get('/musica/artista/:artista', musica.getMusicaByArtista); 
musicasRouter.get('/musica/album/:album', musica.getMusicaByAlbum); 
musicasRouter.get('/musica/banda/:banda', musica.getMusicaByBanda); 
musicasRouter.get('/musica/musico/:musico', musica.getMusicaByMusico); 
musicasRouter.post('/musica', musica.createMusica);
musicasRouter.put('/musica/:id', musica.updateMusica);
musicasRouter.delete('/musica/:id', musica.deleteMusica);

export { musicasRouter };