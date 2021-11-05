import md5 from "md5";
import axios from "axios";

class GetDataFromMarvelApiService {
    async execute() {
        const marvelPublicKey = "b091e4f619436453d9a951e666a18be8";
        const marvelPrivateKey = "41c8c6053be4b279e2d3c256fb3f782e1f9cc28b";
        const ts = Number(new Date());

        const hash = md5(ts + marvelPrivateKey + marvelPublicKey);

        const api = axios.create({
            baseURL: "https://gateway.marvel.com/v1/public",
            params: {
                ts,
                apikey: marvelPublicKey,
                hash
            }
        });

        const characters = [];
        let count = 0;
        let response = null;
        let offset = 0;
        const limit = 10; //100

        // do {
        response = await api.get("/characters", {
            params: {
                offset,
                limit
            }
        })

        const prepareCharacters =  await Promise.all( response.data.data.results.map(async character => {
            const comics =  await Promise.all( character.comics.items.map(async comic => {
                const comicId = comic.resourceURI.split("/").slice(-1);
                const response = await api.get(`/comics/${comicId}`);
                
                const prepareComics = response.data.data.results.map(comic => {
                    return {
                        title: comic.title,
                        variantDescription: comic.variantDescription,
                        description: comic.description,
                        pageCount: comic.pageCount,
                        thumbnail: comic.thumbnail
                    }
                });
                
                return prepareComics;
            }) );

            return {
                name: character.name,
                description: character.description,
                thumbnail: character.thumbnail,
                comics
            }
        }) );

        Array.prototype.push.apply(characters, prepareCharacters);

        count += response.data.data.count;
        offset += response.data.data.count;
        // } while (count < response.data.data.total);

        return characters;
    }
}

export { GetDataFromMarvelApiService };