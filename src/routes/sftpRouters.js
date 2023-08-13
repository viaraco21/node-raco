//método SftpController, vamos usar esse método no arquivo de rotas
import express from "express";
import SftpController from "../controllers/sftpController.js";

const router = express.Router();

router
  .get("/sftp", SftpController.listarSftp)
  .get("/sftp/:id", SftpController.listarSftpPorId)
  .post("/sftp", SftpController.cadastrarSftp)
  .put("/sftp/:id", SftpController.atualizarSftp)
  .delete("/sftp/id", SftpController.excluirSftp)

export default router;