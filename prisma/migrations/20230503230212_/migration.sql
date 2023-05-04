-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tech_used" TEXT NOT NULL,
    "reflection" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
