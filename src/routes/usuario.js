const express = require("express");
const controller = require("../controllers/usuario");

const router = express.Router();



router.get("/usuarios/:id", controller.buscarUm);
router.get("/usuarios", controller.buscarTodos);
router.post("/usuarios", controller.criar);
router.put("/usuarios/:id", controller.atualizar);
router.delete("/usuarios/:id", controller.excluir);
router.post("/usuarios/autenticacao", controller.autenticacao);

module.exports =router;