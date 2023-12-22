-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gpts" (
    "id" SERIAL NOT NULL,
    "post_id" TEXT NOT NULL,
    "short_url" TEXT,
    "author" TEXT,
    "show_name" TEXT,
    "show_desc" TEXT,
    "show_welcome" TEXT,
    "show_image" TEXT,

    CONSTRAINT "gpts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_url_key" ON "Posts"("url");

-- CreateIndex
CREATE UNIQUE INDEX "gpts_post_id_key" ON "gpts"("post_id");
