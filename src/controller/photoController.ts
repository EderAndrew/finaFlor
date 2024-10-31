import { RequestHandler } from "express";
import { changeStatus } from "../services/photoServices";

export const updatePhotoStatus: RequestHandler = async (req, res): Promise<any> => {
  try {
    const { id } = req.params;
    const { selected } = req.body;
    const photo = await changeStatus(parseInt(id), selected);

    if (!photo) return res.status(400).json({ message: "Erro ao atualizar imagem." });

    return res.status(200).json({ message: "Imagem atualizada com sucesso." });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
