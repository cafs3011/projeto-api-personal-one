/**
 *  @swagger
 *  definitions:
 *    exercicio:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        nome:
 *          type: string
 *        descricao:
 *          type: string
 *        enderecoImagem:
 *          type: string
 *        publicIdImagem:
 *          type: string
 */

/**
 *  @swagger
 *  /exercicios/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Exercícios
 *    name: Buscar Exercício pelo ID
 *    summary: Buscar Exercício pelo ID
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do exercício a ser retornado
 *       required: true
 *       type: integer
 *    responses:
 *     200:
 *       description: Exercício retornado com sucesso
 *       schema:
 *        $ref: '#/definitions/exercicio'
 *     401:
 *       description: Usuário não autorizado
 *     404:
 *       description: Exercício não encontrado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /exercicios:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Exercícios
 *    name: Listagem de Exercício
 *    summary: Listagem de Exercício
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    responses:
 *     200:
 *       description: Exercícios retornados com sucesso
 *       schema:
 *        $ref: '#/definitions/aluno'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /exercicios:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Exercícios
 *    name: Cadastrar Exercício
 *    summary: Cadastrar Exercício
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
 *       description: Exercício cadastrado com sucesso
 *       schema:
 *        $ref: '#/definitions/exercicio'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /exercicios/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Exercícios
 *    name: Atualizar Exercício
 *    summary: Atualizar Exercício
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do exercício a ser atualizado
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
 *       description: Exercício atualizado com sucesso
 *       schema:
 *        $ref: '#/definitions/exercicio'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /exercicios/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Exercícios
 *    name: Deletar Exercício pelo ID
 *    summary: Deletar Exercício pelo ID
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do exercício a ser deletado
 *       required: true
 *       type: integer
 *    responses:
 *     200:
 *       description: Exercício deletado com sucesso
 *     401:
 *       description: Usuário não autorizado
 *     404:
 *       description: Exercício não encontrado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /exercicios/{id}/postarImagem:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Exercícios
 *    name: Postar imagem do Exercício
 *    summary: Postar imagem do Exercício
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *     - multipart/form-data
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID do exercício a ser atualizado
 *        required: true
 *        type: integer
 *      - name: photo
 *        in: formData
 *        type: file
 *        description: Arquivo para ser postado
 *    responses:
 *     200:
 *       description: Imagem postada com sucesso
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */
