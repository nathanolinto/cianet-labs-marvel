import { Request, Response } from "express";
import { GetCharacterByIdService } from "../services/GetCharacterByIdService";

class GetCharacterByIdController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;

        const service = new GetCharacterByIdService();
        
        try {
            const result = await service.execute(id);
            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
}

export { GetCharacterByIdController };