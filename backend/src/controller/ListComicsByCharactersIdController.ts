import { Request, Response } from "express";
import { ListComicsByCharactersServiceId } from "../services/ListComicsByCharactersServiceId";

class ListComicsByCharactersIdController {
    async handle(request: Request, response: Response) {
        let {offset, limit} = request.query;
        const {id: character_id} = request.params

        if(!offset) {
            offset = "0";
        }
        if (!limit) {
            limit = "10";
        }

        const service = new ListComicsByCharactersServiceId();
        
        try {
            const result = await service.execute(Number(offset), Number(limit), character_id);
            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
}

export { ListComicsByCharactersIdController };