<<<<<<< HEAD
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
        
=======
usuarioModel = require("../models/usuarioModel");
alunoModel = require("../models/alunoModel");

module.exports = class alunoModelView {
  constructor(usuario, aluno) {
    usuarioModel = usuario;
    alunoModel = aluno;
    if (usuario) {
      this.id = alunoModel.id;
      this.usuario_id = usuarioModel.id;
      this.nome = usuarioModel.nome;
      this.cpf = usuarioModel.cpf;
      this.dataNascimento = alunoModel.dataNascimento;
      this.altura = alunoModel.altura;
      this.peso = alunoModel.peso;
      this.email = usuarioModel.email;
      this.restricao = alunoModel.restricao;
      this.observacao = alunoModel.observacao;
      this.telefone = alunoModel.telefone;
    } else {
      this.nome = alunoModel.usuario.nome;
      this.cpf = alunoModel.usuario.cpf;
      this.dataNascimento = alunoModel.dataNascimento;
      this.altura = alunoModel.altura;
      this.peso = alunoModel.peso;
      this.email = alunoModel.usuario.email;
      this.restricao = alunoModel.restricao;
      this.observacao = alunoModel.observacao;
      this.telefone = alunoModel.telefone;
>>>>>>> a7d08aeb18c6e1b02902d641cc02c4632473f623
    }
  }
};
