const express = require("express");
const controller = require("../controllers/assinaturaController");
const router = express.Router();
const authMiddleware = require('../middlewares/autorizacaoMiddleware');

router.use(authMiddleware);

router.get("/assinatura/:id", controller.buscarUm);
router.get("/assinatura", controller.buscarTodos);
router.post("/assinatura", controller.criar);
//router.put("/alunos/:id", controller.atualizar);
//router.delete("/alunos/:id", controller.excluir);

module.exports = router;