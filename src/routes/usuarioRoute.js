const express = require("express");
const controller = require("../controllers/usuarioController");
const router = express.Router();
/*const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-jsdoc');
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));*/

/**
 * @swagger
 * definitions:
 *    cadastrarUsuario:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *          nome:
 *              type: string
 *          email:
 *              type: string
 *          senha:
 *              type: string
 *          cpf:
 *              type: string
 *          required:
 *            - nome
 *            - email
 *            - senha
 *            - cpf
 */

router.get("/usuarios/:id", controller.buscarUm);

/**
 * @swagger
 * definitions:
 *    cadastrarUsuario:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *          nome:
 *              type: string
 *          email:
 *              type: string
 *          senha:
 *              type: string
 *          cpf:
 *              type: string
 *          required:
 *            - nome
 *            - email
 *            - senha
 *            - cpf
 */


 /**
 * @swagger
 * /buscarUsuarios:
 *  get:
 *      tags:
 *          - Usuarios
 *      name: Buscar Usuários
 *      summary: Buscar Usuários
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      responses:
 *      200:
 *          description: Rotina efetuada com sucesso
 *      201:
 *          description: Usuário criado com sucesso
 *      400:
 *          description: Chamada inválida
 *      401:
 *          description: Usuário não autorizado
 *      404:
 *          description: Usuário não encontrado
 *      500:
 *          description: Erro interno na API
 */
router.get("/usuarios/buscarUsuarios", controller.buscarTodos);

 /**
 * @swagger
 * /usuarios:
 *  post:
 *      tags:
 *          - Usuarios
 *      name: Cadastrar Usuário
 *      summary: Cadastramento de Usuários
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *              $ref: '#/definitions/cadastrarUsuario'
 *              type: object
 *              properties:
 *              nome:
 *                type: string
 *              email:
 *                type: string
 *              senha:
 *                type: string
 *              cpf:
 *                type: string
 *              required:
 *                  - nome
 *                  - email
 *                  - senha
 *                  - cpf
 *      responses:
 *      200:
 *          description: Rotina efetuada com sucesso
 *      201:
 *          description: Usuário criado com sucesso
 *      400:
 *          description: Chamada inválida
 *      401:
 *          description: Usuário não autorizado
 *      404:
 *          description: Usuário não encontrado
 *      500:
 *          description: Erro interno na API
 */
router.post("/usuarios", controller.criar);
router.put("/usuarios/:id", controller.atualizar);
router.delete("/usuarios/:id", controller.excluir);
router.post("/usuarios/autenticacao", controller.autenticacao);

module.exports =router;