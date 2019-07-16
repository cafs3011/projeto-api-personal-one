const express = require("express");
const controller = require("../controllers/personal");
const router = express.Router();
//
router.get("/personals/:id", controller.buscarUm);
router.get("/personals", controller.buscarTodos);
router.post("/personals", controller.criar);
router.put("/personals/:id", controller.atualizar);
router.delete("/personals/:id", controller.excluir);

module.exports = router;
