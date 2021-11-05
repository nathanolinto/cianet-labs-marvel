import { Request, Response } from "express";
import { CreateCharacterService } from "../services/CreateCharacterService";

class CreateCharacterController {
    async handle(request: Request, response: Response) {
        const { name, description, thumbnail } = request.body;
        const service = new CreateCharacterService();
        
        try {
            const result = await service.execute(name, description, thumbnail);
            return response.status(201).json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
        

    }
}

export { CreateCharacterController };