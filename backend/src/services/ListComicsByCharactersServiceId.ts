import prismaClient from "../prisma";

class ListComicsByCharactersServiceId {
    async execute(offset:number, limit:number, character_id:string) {
        const total = await prismaClient.comic.count();
        const comics = await prismaClient.comic.findMany({
            skip: offset,
            take: limit,
            where: {
                character_id
            },
            orderBy: {
                title: "asc"
            }
        })

        return { offset, limit, total, results: comics };
    }
}

export { ListComicsByCharactersServiceId };