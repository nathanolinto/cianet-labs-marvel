import { Router } from "express";
import { CreateCharacterController } from "./controller/CreateCharacterController";
import { ListCharactersController } from "./controller/ListCharactersController";
import { GetCharacterByIdController } from "./controller/GetCharacterByIdController";

import {CreateComicController} from "./controller/CreateComicController";
import { ListComicsByCharactersIdController } from "./controller/ListComicsByCharactersIdController"

import { GetDataFromMarvelApiController } from "./controller/GetDataFromMarvelApiController "

const router = Router();

router.post("/characters", new CreateCharacterController().handle);
router.get("/characters", new ListCharactersController().handle);
router.get("/characters/:id", new GetCharacterByIdController().handle);
 
router.post("/characters/:id/comics", new CreateComicController().handle);
router.get("/characters/:id/comics", new ListComicsByCharactersIdController().handle);

router.get("/getdatafrommarvelapi", new GetDataFromMarvelApiController().handle);

export { router };