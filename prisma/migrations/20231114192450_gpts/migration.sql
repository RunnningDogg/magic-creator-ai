-- CreateTable
CREATE TABLE "Gpts" (
    "id" SERIAL NOT NULL,
    "post_id" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "show_name" TEXT NOT NULL,
    "show_desc" TEXT NOT NULL,
    "show_welcome" TEXT NOT NULL,
    "show_image" TEXT NOT NULL,

    CONSTRAINT "Gpts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gpts_post_id_key" ON "Gpts"("post_id");
