/**
 *  @swagger
 *  definitions:
 *    usuario:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        nome:
 *          type: string
 *        email:
 *          type: string
 *          format: email
 *        cpf:
 *          type: string
 *        token:
 *          type: string
 */

/**
 *  @swagger
 *  /usuarios/autenticacao:
 *  post:
 *    tags:
 *      - Usuarios
 *    name: Cadastrar Usuário
 *    summary: Cadastramento de Usuários
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: body
 *       in: body
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         senha:
 *           type: string
 *         required:
 *           - email
 *           - senha
 *    responses:
 *     200:
 *       description: Autenticação efetuada com sucesso
 *       schema:
 *        $ref: '#/definitions/usuario'
 *     401:
 *       description: Usuário não autorizado
 *     404:
 *       description: Usuário não encontrado
 *     500:
 *       description: Erro interno na API
 */
