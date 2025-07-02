import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class MusicaController {
   /**
    * @swagger
    * /:
    *   get:
    *     summary: Lista todas as músicas
    *     responses:
    *       200:
    *         description: Lista de músicas retornada com sucesso
    */
   async getAllmusicas(req, res) {
      const musicas = await prisma.musica.findMany();
      res.status(200).json(musicas);
   }

   /**
    * @swagger
    * /musica/{id}:
    *   get:
    *     summary: Busca uma música pelo ID
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         schema:
    *           type: integer
    *     responses:
    *       200:
    *         description: Música encontrada
    *       404:
    *         description: Música não encontrada
    */
   async getMusicaById(req, res) {
      const { id } = req.params;
      const musicaEncontrada = await prisma.musica.findUnique({
         where: { id: Number(id) },
      });
      if (!musicaEncontrada) {
         return res.status(404).json({ message: "Música não encontrada" });
      }
      res.status(200).json(musicaEncontrada);
   }

   /**
    * @swagger
    * /musica/artista/{artista}:
    *   get:
    *     summary: Busca músicas por artista
    */
   async getMusicaByArtista(req, res) {
      const { artista } = req.params;
      const musicasEncontradas = await prisma.musica.findMany({
         where: { artista: { equals: artista, mode: 'insensitive' } },
      });
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Artista não encontrado" });
      }
      res.status(200).json(musicasEncontradas);
   }

   /**
    * @swagger
    * /musica/album/{album}:
    *   get:
    *     summary: Busca músicas por álbum
    */
   async getMusicaByAlbum(req, res) {
      const { album } = req.params;
      const musicasEncontradas = await prisma.musica.findMany({
         where: { albuns: { has: album } },
      });
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Álbum não encontrado" });
      }
      res.status(200).json(musicasEncontradas);
   }

   /**
    * @swagger
    * /musica/banda/{banda}:
    *   get:
    *     summary: Busca músicas por banda
    */
   async getMusicaByBanda(req, res) {
      const { banda } = req.params;
      const musicasEncontradas = await prisma.musica.findMany({
         where: { banda: { equals: banda, mode: 'insensitive' } },
      });
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Banda não encontrada" });
      }
      res.status(200).json(musicasEncontradas);
   }

   /**
    * @swagger
    * /musica/musico/{musico}:
    *   get:
    *     summary: Busca músicas por músico
    */
   async getMusicaByMusico(req, res) {
      const { musico } = req.params;
      const musicasEncontradas = await prisma.musica.findMany({
         where: { musico: { equals: musico, mode: 'insensitive' } },
      });
      if (musicasEncontradas.length === 0) {
         return res.status(404).json({ message: "Músico não encontrado" });
      }
      res.status(200).json(musicasEncontradas);
   }

   /**
    * @swagger
    * /musica:
    *   post:
    *     summary: Cria uma nova música
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               id:
    *                 type: integer
    *               banda:
    *                 type: string
    *               artista:
    *                 type: string
    *               musico:
    *                 type: string
    *               albuns:
    *                 type: array
    *                 items:
    *                   type: string
    *     responses:
    *       201:
    *         description: Música criada com sucesso
    */
   async createMusica(req, res) {
      const { id, banda, artista, musico, albuns } = req.body;
      try {
         const novaMusica = await prisma.musica.create({
            data: { id, banda, artista, musico, albuns },
         });
         res.status(201).json(novaMusica);
      } catch (error) {
         res.status(400).json({ message: "Erro ao criar música", error: error.message });
      }
   }

   /**
    * @swagger
    * /musica/{id}:
    *   put:
    *     summary: Atualiza uma música existente
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         schema:
    *           type: integer
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               banda:
    *                 type: string
    *               artista:
    *                 type: string
    *               musico:
    *                 type: string
    *               albuns:
    *                 type: array
    *                 items:
    *                   type: string
    *     responses:
    *       200:
    *         description: Música atualizada com sucesso
    *       404:
    *         description: Música não encontrada
    */
   async updateMusica(req, res) {
      const { id } = req.params;
      const { banda, artista, musico, albuns } = req.body;
      try {
         const musicaAtualizada = await prisma.musica.update({
            where: { id: Number(id) },
            data: { banda, artista, musico, albuns },
         });
         res.status(200).json(musicaAtualizada);
      } catch (error) {
         res.status(404).json({ message: "Música não encontrada", error: error.message });
      }
   }

   /**
    * @swagger
    * /musica/{id}:
    *   delete:
    *     summary: Remove uma música pelo ID
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         schema:
    *           type: integer
    *     responses:
    *       204:
    *         description: Música removida com sucesso
    *       404:
    *         description: Música não encontrada
    */
   async deleteMusica(req, res) {
      const { id } = req.params;
      try {
         await prisma.musica.delete({
            where: { id: Number(id) },
         });
         res.status(204).send();
      } catch (error) {
         res.status(404).json({ message: "Música não encontrada", error: error.message });
      }
   }
}

export default MusicaController;