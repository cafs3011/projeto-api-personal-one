/**
 *  @swagger
 *  definitions:
 *    fichaTreinamento:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        nome:
 *          type: string
 *        descricao:
 *          type: string
 *        descansoPadrao:
 *          type: string
 *        orientacao:
 *          type: string
 *        ficha:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *            nome:
 *              type: string
 *            descricao:
 *              type: string
 *            descansoPadrao:
 *              type: string
 *            orientacao:
 *              type: string
 *            exercicioFicha:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                carga:
 *                  type: number
 *                repeticao:
 *                  type: number
 *                intervalo:
 *                  type: string
 *                customizado:
 *                  type: string
 *                codigoSerie:
 *                  type: string
 *                ficha_id:
 *                  type: integer
 *                exercicio_id:
 *                  type: integer
 */

/**
 *  @swagger
 *  /fichas/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Fichas
 *    name: Buscar Ficha pelo ID
 *    summary: Buscar Ficha pelo ID
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do ficha a ser retornado
 *       required: true
 *       type: integer
 *    responses:
 *     200:
 *       description: Ficha retornado com sucesso
 *       schema:
 *        $ref: '#/definitions/ficha'
 *     401:
 *       description: Usuário não autorizado
 *     404:
 *       description: Ficha não encontrado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /fichas:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Fichas
 *    name: Listagem de Ficha
 *    summary: Listagem de Ficha
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    responses:
 *     200:
 *       description: Fichas retornados com sucesso
 *       schema:
 *        $ref: '#/definitions/ficha'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /fichas:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Fichas
 *    name: Cadastrar Ficha
 *    summary: Cadastrar Ficha
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
 *           description: Teste de descrição
 *         descricao:
 *           type: string
 *         required:
 *           - nome
 *           - descricao
 *    responses:
 *     201:
 *       description: Ficha cadastrado com sucesso
 *       schema:
 *        $ref: '#/definitions/ficha'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /fichas/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Fichas
 *    name: Atualizar Ficha
 *    summary: Atualizar Ficha
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do ficha a ser atualizado
 *       required: true
 *       type: integer
 *     - name: body
 *       in: body
 *       properties:
 *         nome:
 *           type: string
 *           description: Teste de descrição
 *         descricao:
 *           type: string
 *         required:
 *           - nome
 *           - descricao
 *    responses:
 *     200:
 *       description: Ficha atualizado com sucesso
 *       schema:
 *        $ref: '#/definitions/ficha'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /fichas/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Fichas
 *    name: Deletar Ficha pelo ID
 *    summary: Deletar Ficha pelo ID
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do ficha a ser deletado
 *       required: true
 *       type: integer
 *    responses:
 *     200:
 *       description: Ficha deletado com sucesso
 *     401:
 *       description: Usuário não autorizado
 *     404:
 *       description: Ficha não encontrado
 *     500:
 *       description: Erro interno na API
 */
