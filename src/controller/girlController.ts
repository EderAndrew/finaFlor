import fs from "fs/promises";
import { RequestHandler } from "express";
import { girlSchema } from "../schemas/girlSchema";
import { findGirlByName, newGirl } from "../services/girlService";
import { IGirl } from "../interfaces/girlinterface";
import { ExtendFileRequest } from "../interfaces/extend-request";
import { IFiles } from "../interfaces/fileinterface";
import formidable from "formidable";
import sharp from "sharp";
import path from "path";

sharp.cache(false);

export const createGirl: RequestHandler = async (req: ExtendFileRequest, res): Promise<any> => {
  try {
    //VERIFICA SE JÁ EXISTE A GAROTA COM O NOME INSERIDO

    /* const safeData = girlSchema.safeParse(req.body);
    if (!safeData.success) {
      return res.status(400).json({ error: safeData.error.flatten().fieldErrors });
    } */
    let files = req.files as { [fieldname: string]: formidable.File[] };

    for (let x = 0; x < files.images.length; x++) {
      await sharp(files.images[x].filepath).toFormat("webp").toFile(`./public/media/${files.images[x].newFilename}.webp`);
      await fs.unlink(files.images[x].filepath);
    }

    /* const haveGirl = await findGirlByName(safeData.data.name);

    if (!haveGirl) return res.status(400).json({ error: "Ja existe uma garota com este nome." });
    //CASO NÃO, SALVA AS INFORMAÇÕES
    const data = {
      name: safeData.data.name,
      description: safeData.data.description,
      day: safeData.data.day,
      selected: safeData.data.selected,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const girl = await newGirl(data as IGirl);

    if (!girl) return res.status(400).json({ error: "Erro ao inserir garota." }); */

    //TRATA A IMAGEM E SALVA NA PASTA DO SISTEMA
    //RETORNA A INFORMAÇÕES DA GAROTA CADASTRADA

    return res.status(201).json({ files });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
