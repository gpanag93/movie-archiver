-- CreateEnum
CREATE TYPE "InputSource" AS ENUM ('IMDB', 'TEXT');

-- CreateEnum
CREATE TYPE "InputStatus" AS ENUM ('PENDING', 'PROCESSED', 'FAILED');

-- CreateTable
CREATE TABLE "MovieInput" (
    "id" SERIAL NOT NULL,
    "rawInput" TEXT NOT NULL,
    "source" "InputSource" NOT NULL,
    "status" "InputStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MovieInput_pkey" PRIMARY KEY ("id")
);
