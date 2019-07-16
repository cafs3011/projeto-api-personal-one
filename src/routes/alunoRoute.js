const express = require("express");
const controller = require("../controllers/alunoController");
const router = express.Router();
const authMiddleware = require('../middlewares/autorizacaoMiddleware');
//
//router.use(authMiddleware);

router.get("/teste", (req, res, next) => { res.send({ok:"ok"})});
router.get("/alunos/:id", controller.buscarUm);
router.get("/alunos", controller.buscarTodos);
router.post("/alunos", controller.criar);
router.put("/alunos/:id", controller.atualizar);
router.delete("/alunos/:id", controller.excluir);

module.exports = router;
