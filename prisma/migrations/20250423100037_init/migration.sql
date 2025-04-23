-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "fullName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avatarUrl" TEXT,
    "bio" TEXT,
    "location" TEXT,
    "isVerified" BOOLEAN DEFAULT false,
    "phoneNumber" TEXT,
    "donationQtd" BIGINT NOT NULL DEFAULT 0,
    "campaignQtd" BIGINT NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "beneficiaryName" TEXT,
    "fundraisingGoal" REAL,
    "fundsRaised" REAL,
    "imageCoverUrl" TEXT,
    "institution" TEXT,
    "location" TEXT,
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
    "categoryId" TEXT,
    "ongId" TEXT,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");
