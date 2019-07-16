const express = require("express");
const controller = require("../controllers/treino");
const router = express.Router();
//
router.get("/treinos/:id", controller.buscarUm);
router.get("/treinos", controller.buscarTodos);
router.post("/treinos", controller.criar);
router.put("/treinos/:id", controller.atualizar);
router.delete("/treinos/:id", controller.excluir);

module.exports = router;
