import fs from "fs/promises";
import { RequestHandler } from "express";
import { girlSchema } from "../schemas/girlSchema";
import { findGirlByName, newGirl } from "../services/girlService";
import { IGirl } from "../interfaces/girlinterface";
import { ExtendFileRequest } from "../interfaces/extend-request";
import { IFiles } from "../interfaces/fileinterface";
import formidable from "formidable";
import sharp from "sharp";
import { IPic } from "../interfaces/picinterface";

sharp.cache(false);

export const createGirl: RequestHandler = async (req, res): Promise<any> => {
  try {
    console.log(req.body.name);
    const safeData = girlSchema.safeParse(req.body);
    if (!safeData.success) {
      return res.status(400).json({ error: safeData.error.flatten().fieldErrors });
    }
    /* let files = req.files as { [fieldname: string]: formidable.File[] };
    let images: IPic[] = [];
    for (let x = 0; x < files.images.length; x++) {
      await sharp(files.images[x].filepath).toFormat("webp").toFile(`./public/media/${files.images[x].originalFilename}.webp`);
      images.push({
        pic_name: `${files.images[x].originalFilename?.split(".")[0]}.webp`,
        selected: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await fs.unlink(files.images[x].filepath);
    }

    const haveGirl = await findGirlByName(safeData.data.name as string);

    if (haveGirl) return res.status(400).json({ error: "Ja existe uma garota com este nome." });

    const data = {
      name: safeData.data.name,
      description: safeData.data.description,
      day: safeData.data.day,
      selected: safeData.data.selected,
      createdAt: new Date(),
      updatedAt: new Date(),
      pics: [...images],
    }; */

    /* const girl = await newGirl(data as IGirl);

    if (!girl) return res.status(400).json({ error: "Erro ao inserir garota." }); */

    return res.status(201).json({ safeData });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
