-- CreateTable
CREATE TABLE "comics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "variant_description" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "page_count" INTEGER NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    CONSTRAINT "comics_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
