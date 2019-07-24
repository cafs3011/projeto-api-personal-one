const express = require("express");
const controller = require("../controllers/exercicioController");
const router = express.Router();
const authMiddleware = require('../middlewares/autorizacaoMiddleware');

router.use(authMiddleware);

router.get("/exercicios/:id", controller.buscarUm);
router.get("/exercicios", controller.buscarTodos);
router.post("/exercicios", controller.criar);
router.put("/exercicios/:id", controller.atualizar);
router.delete("/exercicios/:id", controller.excluir);

module.exports = router;