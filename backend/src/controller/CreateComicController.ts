import { Request, Response } from "express";
import { CreateComicService } from "../services/CreateComicService";

class CreateComicController {
    async handle(request: Request, response: Response) {
        const { title, variantDescription, pageCount, thumbnail } = request.body;
        let { description } = request.body;
        if(description === null) {
            description = "";
        }
        const { id: characterId } = request.params;
        const service = new CreateComicService();

        try {
            const result = await service.execute(title, variantDescription, description, Number(pageCount), thumbnail, characterId);
            return response.status(201).json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }


    }
}

export { CreateComicController };