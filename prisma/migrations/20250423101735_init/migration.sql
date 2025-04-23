/*
  Warnings:

  - You are about to alter the column `categoryId` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `ongId` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `campaigns` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ongs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "about" TEXT,
    "bio" TEXT,
    "coverImageUrl" TEXT,
    "isVerified" BOOLEAN DEFAULT false,
    "mission" TEXT,
    "name" TEXT,
    "phoneNumber" TEXT,
    "profileImageUrl" TEXT,
    "servicesNumber" BIGINT DEFAULT 0,
    "supportsNumber" BIGINT DEFAULT 0,
    "vision" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "email" TEXT,
    "website" TEXT,
    "location" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "ongs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_campaigns" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "beneficiaryName" TEXT,
    "fundraisingGoal" REAL,
    "fundsRaised" REAL,
    "imageCoverUrl" TEXT,
    "institution" TEXT,
    "location" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "numberOfContributions" INTEGER,
    "phoneNumber" TEXT,
    "priority" INTEGER DEFAULT 0,
    "endDate" DATETIME,
    "startDate" DATETIME,
    "isUrgent" BOOLEAN DEFAULT false,
    "isActivate" BOOLEAN DEFAULT true,
    "campaignType" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'AOA',
    "birth" DATETIME,
    "categoryId" INTEGER,
    "ongId" INTEGER,
    "userId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "campaigns_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaigns_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaigns_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_campaigns" ("beneficiaryName", "birth", "campaignType", "categoryId", "createdAt", "currency", "description", "endDate", "fundraisingGoal", "fundsRaised", "id", "imageCoverUrl", "institution", "isActivate", "isUrgent", "location", "numberOfContributions", "ongId", "phoneNumber", "priority", "startDate", "title", "updatedAt", "userId") SELECT "beneficiaryName", "birth", "campaignType", "categoryId", "createdAt", "currency", "description", "endDate", "fundraisingGoal", "fundsRaised", "id", "imageCoverUrl", "institution", "isActivate", "isUrgent", "location", "numberOfContributions", "ongId", "phoneNumber", "priority", "startDate", "title", "updatedAt", "userId" FROM "campaigns";
DROP TABLE "campaigns";
ALTER TABLE "new_campaigns" RENAME TO "campaigns";
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "fullName" TEXT,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("createdAt", "email", "firstName", "fullName", "id", "lastName", "role", "updatedAt") SELECT "createdAt", "email", "firstName", "fullName", "id", "lastName", "role", "updatedAt" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
