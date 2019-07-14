const express = require("express");
const controller = require("../controllers/aluno");
const router = express.Router();
//
router.get("/alunos/:id", controller.buscarUm);
router.get("/alunos", controller.buscarTodos);
router.post("/alunos", controller.criar);
router.put("/alunos/:id", controller.atualizar);
router.delete("/alunos/:id", controller.excluir);

module.exports = router;
