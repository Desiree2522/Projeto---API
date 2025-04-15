import { Router} from 'express';

//importando a classe MusicaController
import MusicaController  from '../controller/musicas.controller.js';

let musica = new MusicaController(); // Instanciando a classe MusicaController

//exemplifica as rotas 
 const musicasRouter = Router();

     musicasRouter.get('/', musica.getAllmusicas); // Rota para obter todas as músicas

    musicasRouter.get('/musica/:id', musica.getMusicaById); // Rota para obter uma música pelo ID  
    musicasRouter.get('/musica/artista/:artista', musica.getMusicaByArtista); // Rota para obter músicas por artista
    musicasRouter.get('/musica/album/:album', musica.getMusicaByAlbum); // Rota para obter músicas por álbum    
    musicasRouter.get('/musica/banda/:banda', musica.getMusicaByBanda); // Rota para obter músicas por banda
    musicasRouter.get('/musica/musico/:musico', musica.getMusicaByMusico); // Rota para obter músicas por músico
    
 export { musicasRouter };

 