//usuarioModel = require('../models/usuarioModel');
//alunoModel = require('../models/alunoModel');

module.exports = class alunoModelView
{

    constructor(usuario, aluno){
        
        //usuarioModel = usuario;
        //alunoModel = aluno;
        this.id = aluno.id;
        this.dataNascimento = aluno.dataNascimento;
        this.altura = aluno.altura;
        this.restricao = aluno.restricao;
        this.observacao = aluno.observacao;
        this.telefone = aluno.telefone;
        this.peso = aluno.peso;
        this.usuario_id = usuario.id;
        this.nome = usuario.nome;
        this.cpf = usuario.cpf;
        this.email = usuario.email;
        
    }
}
