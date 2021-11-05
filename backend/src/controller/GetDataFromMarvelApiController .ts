import axios from "axios";
import { Request, Response } from "express";
import { GetDataFromMarvelApiService } from "../services/GetDataFromMarvelApiService";

class GetDataFromMarvelApiController {
    async handle(request: Request, response: Response) {
        const service = new GetDataFromMarvelApiService();

        try {
            const result = await service.execute();
            Promise.all(result.map(async character => {
                const newCharacter = await axios.post("http://localhost:4000/characters", {
                    name: character.name,
                    description: character.description,
                    thumbnail: `${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`
                });
                const characterId = newCharacter.data.id;
                
                Promise.all(character.comics.map(async comic => {
                    const comicReal = comic[0];
                    const newComic = await axios.post(`http://localhost:4000/characters/${characterId}/comics`, {
                        title: comicReal.title,
                        variantDescription: comicReal.variantDescription,
                        description: comicReal.description,
                        pageCount: comicReal.pageCount,
                        thumbnail: `${comicReal.thumbnail.path}/portrait_xlarge.${comicReal.thumbnail.extension}`
                    });
                }));




            }));
            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
}

export { GetDataFromMarvelApiController };