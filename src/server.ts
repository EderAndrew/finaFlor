import express from "express";
import cors from "cors";
import helmet from "helmet";
import { mainRouter } from "./routes/main";
import path from "path";

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(mainRouter);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});
