/**
 *  @swagger
 *  definitions:
 *    personal:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        nome:
 *          type: string
 *        cpf:
 *          type: string
 *        email:
 *          type: string
 *        telefone:
 *          type: string
 *        usuario_id:
 *          type: integer
 */

/**
 *  @swagger
 *  /personals/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Personals
 *    name: Buscar Personal pelo ID
 *    summary: Buscar Personal pelo ID
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do personal a ser retornado
 *       required: true
 *       type: integer
 *    responses:
 *     200:
 *       description: Personal retornado com sucesso
 *       schema:
 *        $ref: '#/definitions/personal'
 *     401:
 *       description: Usuário não autorizado
 *     404:
 *       description: Personal não encontrado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /personals:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Personals
 *    name: Listar de Personals
 *    summary: Listagem de Personals
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    responses:
 *     200:
 *       description: Personals retornados com sucesso
 *       schema:
 *        $ref: '#/definitions/personal'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /personals:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Personals
 *    name: Cadastrar Personal
 *    summary: Cadastrar Personal
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: body
 *       properties:
 *         nome:
 *           type: string
 *         cpf:
 *           type: string
 *         email:
 *           type: string
 *         senha:
 *           type: string
 *         telefone:
 *           type: string
 *         required:
 *           - nome
 *           - cpf
 *           - email
 *           - senha
 *           - telefone
 *    responses:
 *     201:
 *       description: Personal cadastrado com sucesso
 *       schema:
 *        $ref: '#/definitions/personal'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /personals/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Personals
 *    name: Atualizar Personal
 *    summary: Atualizar Personal
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do personal a ser retornado
 *       required: true
 *       type: integer
 *     - name: id
 *       in: body
 *       properties:
 *         nome:
 *           type: string
 *         cpf:
 *           type: string
 *         email:
 *           type: string
 *         telefone:
 *           type: string
 *         required:
 *           - nome
 *           - cpf
 *           - email
 *           - telefone
 *    responses:
 *     200:
 *       description: Personal atualizado com sucesso
 *       schema:
 *        $ref: '#/definitions/personal'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */
