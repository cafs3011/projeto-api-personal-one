module.exports = class alunoModelView
{

    constructor(usuario, aluno){
        this.id = aluno.id;
        this.nome = usuario.nome;
        this.cpf = usuario.cpf;
        this.email = usuario.email;
        this.telefone = aluno.telefone;
        this.dataNascimento = aluno.dataNascimento;
        this.altura = aluno.altura;
        this.restricao = aluno.restricao;
        this.observacao = aluno.observacao;
        this.peso = aluno.peso;
        this.usuario_id = usuario.id;

        
    }
};
