/*
  Warnings:

  - You are about to drop the column `imdbId` on the `MovieInput` table. All the data in the column will be lost.
  - You are about to drop the column `imdbUrl` on the `MovieInput` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MovieInput" DROP COLUMN "imdbId",
DROP COLUMN "imdbUrl";
