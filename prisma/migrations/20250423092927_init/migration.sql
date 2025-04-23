-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "description" TEXT,
    "title" TEXT,
    "image" TEXT,
    "userId" TEXT,
    "ongId" TEXT,
    CONSTRAINT "blogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "blogs_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaign_comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "description" TEXT,
    "userId" TEXT,
    "campaignId" TEXT,
    CONSTRAINT "campaign_comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaign_comments_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaign_contributors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "campaignId" TEXT,
    "userId" TEXT,
    "money" REAL DEFAULT 0,
    "isAnonymous" BOOLEAN DEFAULT false,
    CONSTRAINT "campaign_contributors_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaign_contributors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaign_documents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentPath" TEXT,
    "updatedAt" DATETIME,
    "campaignId" TEXT,
    "userId" TEXT,
    "isApproved" BOOLEAN DEFAULT false,
    CONSTRAINT "campaign_documents_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaign_documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaign_midias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "userId" TEXT,
    "campaignId" TEXT,
    "midiaUrl" TEXT,
    "midiaType" TEXT NOT NULL DEFAULT 'image',
    CONSTRAINT "campaign_midias_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaign_midias_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaign_updates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "title" TEXT,
    "description" TEXT,
    "campaignId" TEXT,
    "userId" TEXT,
    CONSTRAINT "campaign_updates_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaign_updates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "categoryId" TEXT,
    "description" TEXT,
    "fundraisingGoal" REAL,
    "fundsRaised" REAL,
    "imageCoverUrl" TEXT,
    "institution" TEXT,
    "location" TEXT,
    "numberOfContributions" INTEGER,
    "ongId" TEXT,
    "phoneNumber" TEXT,
    "priority" INTEGER DEFAULT 0,
    "endDate" DATETIME,
    "title" TEXT,
    "userId" TEXT,
    "startDate" DATETIME,
    "isUrgent" BOOLEAN DEFAULT false,
    "isActivate" BOOLEAN DEFAULT true,
    "beneficiaryName" TEXT,
    "campaignType" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'AOA',
    "birth" DATETIME,
    "status" TEXT DEFAULT 'active',
    CONSTRAINT "campaigns_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaigns_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "campaigns_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "communities" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "name" TEXT,
    "description" TEXT,
    "image" TEXT,
    "banner" TEXT,
    CONSTRAINT "communities_id_fkey" FOREIGN KEY ("id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "ongId" TEXT,
    "userId" TEXT,
    "title" TEXT,
    "location" TEXT,
    "description" TEXT,
    "backgroundImageUrl" TEXT,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "events_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "events_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT,
    "itemId" TEXT NOT NULL,
    "itemType" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "feeds" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "ongId" TEXT,
    "image" TEXT,
    "description" TEXT,
    CONSTRAINT "feeds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "feeds_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "imageUrl" TEXT,
    CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ongs" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
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
    "userId" TEXT,
    "vision" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "email" TEXT,
    "website" TEXT,
    CONSTRAINT "ongs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ongs_documents" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT,
    "ongId" TEXT,
    "statutesConstitutiveAct" TEXT NOT NULL,
    "declarationGoodStanding" TEXT NOT NULL,
    "minutesConstitutiveAssembly" TEXT NOT NULL,
    "publicDeed" TEXT NOT NULL,
    "registrationCertificate" TEXT,
    "nif" TEXT NOT NULL,
    "biRepresentative" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ongs_documents_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ongs_documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    "status" TEXT,
    "signature" TEXT,
    "identifier" TEXT,
    "paymentTrx" TEXT,
    "amount" REAL,
    "paymentType" TEXT,
    "currency" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT,
    "email" TEXT,
    "avatarUrl" TEXT,
    "bio" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT,
    "isVerified" BOOLEAN DEFAULT false,
    "role" TEXT,
    "donationQtd" BIGINT NOT NULL DEFAULT 0,
    "campaignQtd" BIGINT NOT NULL DEFAULT 0,
    "lastName" TEXT,
    "fullName" TEXT,
    "phoneNumber" TEXT
);

-- CreateTable
CREATE TABLE "user_fcm_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "fcmToken" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_fcm_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_fcm_tokens_userId_key" ON "user_fcm_tokens"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_fcm_tokens_fcmToken_key" ON "user_fcm_tokens"("fcmToken");
