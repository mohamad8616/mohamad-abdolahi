/*
  Warnings:

  - You are about to alter the column `createdAt` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" BIGINT NOT NULL,
    "github" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_Project" ("createdAt", "desc", "github", "id", "img", "link", "technologies", "title") SELECT "createdAt", "desc", "github", "id", "img", "link", "technologies", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
