import { NextFunction, Request, Response, Router } from "express";
import * as authController from "../controller/authController";
import * as userController from "../controller/userController";
import * as girlController from "../controller/girlController";
import { formMiddleWare } from "../utils/formMiddlware";
import { verifyJWT } from "../utils/jwt";

export const mainRouter = Router();

mainRouter.post("/login", authController.login);

mainRouter.post("/user/create", verifyJWT, userController.createUser);

mainRouter.post("/girl/create", verifyJWT, formMiddleWare, girlController.createGirl);
//mainRouter.get("/girl/all", verifyJWT, girlController.getAllGirls);
//mainRouter.get("/girl/:id", verifyJWT, girlController.getOneGirl);
//mainRouter.put("/girl/:id", verifyJWT, girlController.updateGirl);

mainRouter.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});
mainRouter.get("/ping/private", verifyJWT, (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});

mainRouter.get("/upload", (req, res) => {
  res.send(`
   <h2>With <code>"express"</code> npm package</h2>
    <form action="/girl/create" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="name" /></div>
      <div>File: <input type="file" name="images" multiple="multiple"></div>
      <input type="submit" value="Upload">
    </form>
  `);
});

mainRouter.post("/api/upload", formMiddleWare, (req: any, res: Response, next: NextFunction) => {
  res.json({
    fields: req.fields,
    files: req.files,
  });
});
