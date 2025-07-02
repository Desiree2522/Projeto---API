-- CreateTable
CREATE TABLE "Musica" (
    "id" INTEGER NOT NULL,
    "banda" TEXT NOT NULL,
    "artista" TEXT NOT NULL,
    "musico" TEXT NOT NULL,
    "albuns" TEXT[],

    CONSTRAINT "Musica_pkey" PRIMARY KEY ("id")
);
