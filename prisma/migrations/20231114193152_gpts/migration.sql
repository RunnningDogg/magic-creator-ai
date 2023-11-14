/*
  Warnings:

  - You are about to drop the `Gpts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Gpts";

-- CreateTable
CREATE TABLE "gpts" (
    "id" SERIAL NOT NULL,
    "post_id" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "show_name" TEXT NOT NULL,
    "show_desc" TEXT NOT NULL,
    "show_welcome" TEXT NOT NULL,
    "show_image" TEXT NOT NULL,

    CONSTRAINT "gpts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gpts_post_id_key" ON "gpts"("post_id");
