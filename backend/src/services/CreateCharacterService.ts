import prismaClient from "../prisma";

class CreateCharacterService {
    async execute(name: string, description: string, thumbnail: string) {

        let character = await prismaClient.character.findFirst({
            where: {
                name
            }
        });

        if (!character) {
            character = await prismaClient.character.create({
                data: {
                    name,
                    description,
                    thumbnail
                }
            });
        }

        return character;
    }
}

export { CreateCharacterService };