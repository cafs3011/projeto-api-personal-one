/**
 *  @swagger
 *  definitions:
 *    aluno:
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
 *          format: email
 *        telefone:
 *          type: string
 *        dataNascimento:
 *          type: string
 *          format: date
 *        altura:
 *          type: number
 *          format: double
 *        restricao:
 *          type: string
 *        observacao:
 *          type: string
 *        peso:
 *          type: number
 *          format: double
 *        usuario_id:
 *          type: integer
 */

/**
 *  @swagger
 *  /alunos/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Alunos
 *    name: Buscar Aluno pelo ID
 *    summary: Buscar Aluno pelo ID
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do aluno a ser retornado
 *       required: true
 *       type: integer
 *    responses:
 *     200:
 *       description: Aluno retornado com sucesso
 *       schema:
 *        $ref: '#/definitions/aluno'
 *     401:
 *       description: Usuário não autorizado
 *     404:
 *       description: Aluno não encontrado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /alunos:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Alunos
 *    name: Listagem de Alunos
 *    summary: Listagem de Alunos
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    responses:
 *     200:
 *       description: Alunos retornados com sucesso
 *       schema:
 *        $ref: '#/definitions/aluno'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /alunos:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Alunos
 *    name: Cadastrar Aluno
 *    summary: Cadastrar Aluno
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
 *         cpf:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         senha:
 *           type: string
 *         telefone:
 *           type: string
 *         dataNascimento:
 *           type: string
 *           format: date
 *         altura:
 *           type: number
 *           format: double
 *         restricao:
 *           type: string
 *         observacao:
 *           type: string
 *         peso:
 *           type: number
 *           format: double
 *         dataInicio:
 *           type: string
 *           format: date
 *         dataFim:
 *           type: string
 *           format: date
 *         usuario_id:
 *           type: integer
 *         required:
 *           - nome
 *           - cpf
 *           - email
 *           - senha
 *           - telefone
 *           - dataNascimento
 *           - altura
 *           - peso
 *           - usuario_id
 *    responses:
 *     201:
 *       description: Aluno cadastrado com sucesso
 *       schema:
 *        $ref: '#/definitions/aluno'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /alunos/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Alunos
 *    name: Atualizar Aluno
 *    summary: Atualizar Aluno
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID do aluno a ser atualizado
 *       required: true
 *       type: integer
 *     - name: id
 *       in: body
 *       properties:
 *         nome:
 *           type: string
 *           description: Teste de descrição
 *         cpf:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         telefone:
 *           type: string
 *         dataNascimento:
 *           type: string
 *           format: date
 *         altura:
 *           type: number
 *           format: double
 *         restricao:
 *           type: string
 *         observacao:
 *           type: string
 *         peso:
 *           type: number
 *           format: double
 *         dataInicio:
 *           type: string
 *           format: date
 *         dataFim:
 *           type: string
 *           format: date
 *         usuario_id:
 *           type: integer
 *         required:
 *           - nome
 *           - cpf
 *           - email
 *           - telefone
 *           - dataNascimento
 *           - altura
 *           - peso
 *           - usuario_id
 *    responses:
 *     200:
 *       description: Aluno atualizado com sucesso
 *       schema:
 *        $ref: '#/definitions/aluno'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */

/**
 *  @swagger
 *  /alunos/{id}/fichaHoje:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Alunos
 *    name: Busca uma ficha de hoje do aluno
 *    summary: Busca uma ficha de hoje do aluno
 *    produces:
 *     - application/json
 *    consumes:
 *     - application/json
 *    responses:
 *     200:
 *       description: Alunos retornados com sucesso
 *       schema:
 *        $ref: '#/definitions/aluno'
 *     401:
 *       description: Usuário não autorizado
 *     500:
 *       description: Erro interno na API
 */
