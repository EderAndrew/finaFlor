import { NextFunction, request, Request, Response } from "express";
import formidable from "formidable";
import { ExtendFileRequest } from "../interfaces/extend-request";
export const formMiddleWare = async (req: ExtendFileRequest, res: Response, next: NextFunction) => {
  try {
    const form = formidable({
      uploadDir: "./tmp",
      //createDirsFromUploads: true,
      filter: (part) => {
        const allowed: string[] = ["image/webp", "image/png", "image/jpg", "image/jpeg"];

        if (part.mimetype && !allowed.includes(part.mimetype)) {
          return false;
        }
        return true;
      },
    });
    const files = [];

    form
      .on("file", (name, file) => {
        files.push({ name, file });
      })
      .on("end", () => {
        console.log("-> upload done");
      });

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      req.files = files;

      next();
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};