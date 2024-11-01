import { Request, Response, Router } from "express";
import * as authController from "../controller/authController";
import * as userController from "../controller/userController";
import * as girlController from "../controller/girlController";
import * as photoController from "../controller/photoController";
import { formMiddleWare } from "../utils/formMiddlware";
import { verifyJWT } from "../utils/jwt";

export const mainRouter = Router();

mainRouter.post("/login", authController.login);

mainRouter.post("/user", verifyJWT, userController.createUser);

mainRouter.post("/girl", formMiddleWare, girlController.createGirl);
mainRouter.get("/girls", girlController.getAllGirls);
//mainRouter.get("/girl/:id", verifyJWT, girlController.getOneGirl);
//mainRouter.put("/girl/:id", verifyJWT, girlController.updateGirl);

mainRouter.put("/photo/:id", photoController.updatePhotoStatus);
mainRouter.get("/photos", photoController.getAllSelectedPhotos);

mainRouter.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});
mainRouter.get("/ping/private", verifyJWT, (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});
