const express = require("express");
const controller = require("../controllers/fichaTreinamentoController");
const router = express.Router();
const authMiddleware = require('../middlewares/autorizacaoMiddleware');

router.use(authMiddleware);

router.get("/fichaTreinamento/:id", controller.buscarUm);
router.get("/fichaTreinamento", controller.buscarTodos);
router.post("/fichaTreinamento", controller.criar);
//router.put("/alunos/:id", controller.atualizar);
//router.delete("/alunos/:id", controller.excluir);

module.exports = router;