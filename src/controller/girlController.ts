import { RequestHandler } from "express";

export const createGirl: RequestHandler = async (req, res): Promise<any> => {
  try {
    //VERIFICA SE JÁ EXISTE A GAROTA COM O NOME INSERIDO
    //CASO NÃO, SALVA AS INFORMAÇÕES
    //TRATA A IMAGEM E SALVA NA PASTA DO SISTEMA
    //RETORNA A INFORMAÇÕES DA GAROTA CADASTRADA
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
