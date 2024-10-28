import { Request, Response, Router } from "express";
import * as authController from "../controller/authController";
import * as userController from "../controller/userController";
import * as girlController from "../controller/girlController";

export const mainRouter = Router();

mainRouter.post("/login", authController.login);

mainRouter.post("/user/create", userController.createUser);

mainRouter.post("/girl/create", girlController.createGirl);

mainRouter.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});
