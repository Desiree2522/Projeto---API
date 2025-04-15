import { musicas } from "../database/db.js";

class MusicaController {
   getAllmusicas(req, res) {
      res.status(200).json(musicas);
   }
    
    getMusicaById(req, res) {
        const { id } = req.params;
        const musicaEncontrada = musicas.find(m => m.id == id);
        if (!musicaEncontrada) {
            return res.status(404).json({ message: "Música não encontrada" });
        }
        res.status(200).json(musicaEncontrada);
    }

    getMusicaByArtista(req, res) {
        const { artista } = req.params;
        const musicasEncontradas = musicas.filter(m => m.artista.toLowerCase() == artista.toLowerCase());
        if (musicasEncontradas.length === 0) {
            return res.status(404).json({ message: "Artista não encontrado" });
        }
        res.status(200).json(musicasEncontradas);
    }
    
    getMusicaByAlbum(req, res) {
        const { album } = req.params;
        const musicasEncontradas = musicas.filter(m => m.albuns.includes(album));
        if (musicasEncontradas.length === 0) {
            return res.status(404).json({ message: "Álbum não encontrado" });
        }
        res.status(200).json(musicasEncontradas);
    }
    
    getMusicaByBanda(req, res) {
        const { banda } = req.params;
        const musicasEncontradas = musicas.filter(m => m.banda.toLowerCase() === banda.toLowerCase());
        if (musicasEncontradas.length === 0) {
            return res.status(404).json({ message: "Música não encontrada" });
        }
        res.status(200).json(musicasEncontradas);
    }

    getMusicaByMusico(req, res) {
        const { musico } = req.params;
        const musicasEncontradas = musicas.filter(m => m.musico.toLowerCase() === musico.toLowerCase());
        if (musicasEncontradas.length === 0) {
            return res.status(404).json({ message: "Música não encontrada" });
        }
        res.status(200).json(musicasEncontradas);
    }

}

//importando a requição dessa classe 
export  default MusicaController; 


