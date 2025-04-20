// Importa o banco de dados de músicas que está armazenado em 'db.js'
import { musicas } from "../database/db.js";

// Classe responsável por gerenciar as músicas e as respostas da API
class MusicaController {
   // Método para retornar todas as músicas
   // Este método é acessado na rota principal ("/") e retorna todas as músicas cadastradas
   getAllmusicas(req, res) {
      res.status(200).json(musicas);  // Retorna as músicas com status 200 (OK)
   }
    
   // Método para retornar uma música específica pelo ID
   // A URL espera um parâmetro 'id' para procurar a música
   getMusicaById(req, res) {
      const { id } = req.params;  // Extrai o parâmetro 'id' da URL
      // Encontra a música que corresponde ao 'id'
      const musicaEncontrada = musicas.find(m => m.id == id);
      // Se a música não for encontrada, retorna um erro 404
      if (!musicaEncontrada) {
         return res.status(404).json({ message: "Música não encontrada" });
      }
      // Se a música for encontrada, retorna a música com status 200
      res.status(200).json(musicaEncontrada);
   }

   // Método para retornar músicas de um artista específico
   // A URL espera um parâmetro 'artista' e retorna todas as músicas desse artista
   getMusicaByArtista(req, res) {
      const { artista } = req.params;  // Extrai o parâmetro 'artista' da URL
      // Filtra as músicas que pertencem ao artista informado (ignora maiúsculas/minúsculas)
      const musicasEncontradas = musicas.filter(m => m.artista.toLowerCase() === artista.toLowerCase());
      // Se não encontrar nenhuma música, retorna erro 404
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Artista não encontrado" });
      }
      // Se encontrar, retorna as músicas com status 200
      res.status(200).json(musicasEncontradas);
   }
    
   // Método para retornar músicas de um álbum específico
   // A URL espera um parâmetro 'album' e retorna todas as músicas desse álbum
   getMusicaByAlbum(req, res) {
      const { album } = req.params;  // Extrai o parâmetro 'album' da URL
      // Filtra as músicas que pertencem ao álbum especificado
      const musicasEncontradas = musicas.filter(m => m.albuns.includes(album));  // 'albuns' é uma lista de álbuns
      // Se não encontrar nenhuma música, retorna erro 404
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Álbum não encontrado" });
      }
      // Se encontrar, retorna as músicas com status 200
      res.status(200).json(musicasEncontradas);
   }
    
   // Método para retornar músicas de uma banda específica
   // A URL espera um parâmetro 'banda' e retorna todas as músicas dessa banda
   getMusicaByBanda(req, res) {
      const { banda } = req.params;  // Extrai o parâmetro 'banda' da URL
      // Filtra as músicas que pertencem à banda informada (comparação sem considerar maiúsculas/minúsculas)
      const musicasEncontradas = musicas.filter(m => m.banda.toLowerCase() === banda.toLowerCase());
      // Se não encontrar nenhuma música, retorna erro 404
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Banda não encontrada" });
      }
      // Se encontrar, retorna as músicas com status 200
      res.status(200).json(musicasEncontradas);
   }

   // Método para retornar músicas de um músico específico
   // A URL espera um parâmetro 'musico' e retorna todas as músicas desse músico
   getMusicaByMusico(req, res) {
      const { musico } = req.params;  // Extrai o parâmetro 'musico' da URL
      // Filtra as músicas que pertencem ao músico informado (comparação sem considerar maiúsculas/minúsculas)
      const musicasEncontradas = musicas.filter(m => m.musico.toLowerCase() === musico.toLowerCase());
      // Se não encontrar nenhuma música, retorna erro 404
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Músico não encontrado" });
      }
      // Se encontrar, retorna as músicas com status 200
      res.status(200).json(musicasEncontradas);
   }
}

// Exporta a classe MusicaController para que ela possa ser usada nas rotas da aplicação
export default MusicaController;

