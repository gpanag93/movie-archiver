/*
  Warnings:

  - Added the required column `updatedAt` to the `MovieInput` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MovieInput" ADD COLUMN     "imdbId" TEXT,
ADD COLUMN     "imdbUrl" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

UPDATE "MovieInput"
SET "updatedAt" = "createdAt"
WHERE "updatedAt" IS NULL;

ALTER TABLE "MovieInput"
ALTER COLUMN "updatedAt" SET NOT NULL;