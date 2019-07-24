const express = require("express");
const controller = require("../controllers/fichaController");
const router = express.Router();
const authMiddleware = require('../middlewares/autorizacaoMiddleware');

router.use(authMiddleware);

router.get("/fichas/:id", controller.buscarUm);
router.get("/fichas", controller.buscarTodos);
router.post("/fichas", controller.criar);
router.put("/fichas/:id", controller.atualizar);
router.delete("/fichas/:id", controller.excluir);

module.exports = router;