import { Request, Response } from "express";
import { ListCharactersService } from "../services/ListCharactersService";

class ListCharactersController {
    async handle(request: Request, response: Response) {
        let {offset, limit} = request.query;

        if(!offset) {
            offset = "0";
        }
        if (!limit) {
            limit = "10";
        }

        const service = new ListCharactersService();
        
        try {
            const result = await service.execute(Number(offset), Number(limit));
            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
}

export { ListCharactersController };