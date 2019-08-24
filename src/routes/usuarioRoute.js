const express = require("express");
const controller = require("../controllers/usuarioController");
const router = express.Router();

router.get("/usuarios/:id", controller.buscarUm);

/**
 * swagger
 * /usuarios:
 *  get:
 *      tags:
 *          - usuarios
 *      name: Buscar Usuários
 *      summary: Buscar Usuários
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      responses:
 *          200:
 *              description: Rotina efetuada com sucesso
 *              schema:
 *                  $ref: '#/definitions/usuario'
 *          201:
 *              description: Usuário criado com sucesso
 *          400:
 *              description: Chamada inválida
 *          401:
 *              description: Usuário não autorizado
 *          404:
 *          description: Usuário não encontrado
 *      500:
 *          description: Erro interno na API
 */
router.get("/usuarios", controller.buscarTodos);
router.post("/usuarios", controller.criar);
router.put("/usuarios/:id", controller.atualizar);
router.delete("/usuarios/:id", controller.excluir);
router.post("/usuarios/autenticacao", controller.autenticacao);

module.exports = router;
