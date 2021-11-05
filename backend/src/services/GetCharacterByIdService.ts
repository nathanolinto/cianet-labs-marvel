import prismaClient from "../prisma";

class GetCharacterByIdService {
    async execute(id:string) {
        const character = await prismaClient.character.findFirst({
            where: {
                id
            }
        })

        return { character };
    }
}

export { GetCharacterByIdService };