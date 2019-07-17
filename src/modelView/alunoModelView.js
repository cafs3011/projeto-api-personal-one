usuarioModel = require('../models/usuarioModel');
alunoModel = require('../models/alunoModel');

module.exports = class alunoModelView
{

    constructor(usuario, aluno){

        usuarioModel = usuario;
        alunoModel = aluno;
        this.nome = usuarioModel.nome;
        this.cpf = usuarioModel.cpf;
        this.dataNascimento = alunoModel.dataNascimento;
        this.altura = alunoModel.altura;
        this.peso = alunoModel.peso;
        this.email = usuarioModel.email;
        this.restricao = alunoModel.restricao;
        this.observacao = alunoModel.observacao;
        this.telefone = alunoModel.telefone;
    }
}
