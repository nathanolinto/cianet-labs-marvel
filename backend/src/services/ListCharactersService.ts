import prismaClient from "../prisma";

class ListCharactersService {
    async execute(offset:number, limit:number) {
        const total = await prismaClient.character.count();
        const characters = await prismaClient.character.findMany({
            skip: offset,
            take: limit,
            orderBy: {
                name: "asc"
            }
        })

        return { offset, limit, total, results: characters };
    }
}

export { ListCharactersService };