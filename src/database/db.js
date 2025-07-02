import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const musicas = async () => {
    return await prisma.musica.findMany();
};

export const getMusicaById = async (id) => {
    return await prisma.musica.findUnique({
        where: { id: Number(id) },
    });
};

export const getMusicaByArtista = async (artista) => {
    return await prisma.musica.findMany({
        where: { artista: artista },
    });
};

export const getMusicaByAlbum = async (album) => {
    return await prisma.musica.findMany({
        where: { albuns: { has: album } },
    });
};

export const getMusicaByBanda = async (banda) => {
    return await prisma.musica.findMany({
        where: { banda: banda },
    });
};

export const getMusicaByMusico = async (musico) => {
    return await prisma.musica.findMany({
        where: { musico: musico },
    });
};