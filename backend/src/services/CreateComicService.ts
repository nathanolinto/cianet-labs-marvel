import prismaClient from "../prisma";

class CreateComicService {
    async execute(title: string, variantDescription: string, description: string, pageCount: number, thumbnail: string, characterId: string) {

        let comic = await prismaClient.comic.findFirst({
            where: {
                title,
                character_id: characterId
            }
        });

        if (!comic) {
            comic = await prismaClient.comic.create({
                data: {
                    title,
                    variant_description: variantDescription,
                    description,
                    page_count: pageCount,
                    thumbnail,
                    character_id:characterId
                },
                include: {
                    character: true
                }
            });
        }

        return comic;
    }
}

export { CreateComicService };