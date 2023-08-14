//método SftpController, vamos usar esse método no arquivo de rotas
import express from "express";
import SftpController from "../controllers/sftpController.js";

const router = express.Router();

router
  .get("/usuario", SftpController.listarUsuario)
  .get("/usuario/:id", SftpController.listarUsuarioPorId)
  .post("/usuario", SftpController.cadastrarUsuario)
  .put("/usuario/:id", SftpController.atualizarUsuario)
  .delete("/usuario/id", SftpController.excluirUsuario)

export default router;