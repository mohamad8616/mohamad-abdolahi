-- CreateTable
CREATE TABLE "project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "github" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobTitle" TEXT NOT NULL,
    "jobDesc" TEXT NOT NULL,
    "jobDate" TEXT NOT NULL,
    "jobCompany" TEXT NOT NULL
);
