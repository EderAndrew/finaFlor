import { Request, Response, Router } from "express";
import * as authController from "../controller/authController";
import * as userController from "../controller/userController";
import * as girlController from "../controller/girlController";
import { verifyJWT } from "../utils/jwt";

export const mainRouter = Router();

mainRouter.post("/login", authController.login);

mainRouter.post("/user/create", verifyJWT, userController.createUser);

mainRouter.post("/girl/create", verifyJWT, girlController.createGirl);
//mainRouter.get("/girl/all", verifyJWT, girlController.getAllGirls);
//mainRouter.get("/girl/:id", verifyJWT, girlController.getOneGirl);
//mainRouter.put("/girl/:id", verifyJWT, girlController.updateGirl);

mainRouter.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});
mainRouter.get("/ping/private", verifyJWT, (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});
