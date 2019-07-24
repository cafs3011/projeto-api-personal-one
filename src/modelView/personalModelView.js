module.exports = class personalModelView
{

    constructor(usuario, personal){
        this.usuario_id = usuario.id;
        this.personal_id = personal.id;
        this.nome = usuario.nome;
        this.cpf = usuario.cpf;
        this.email = usuario.email;
        this.telefone = personal.telefone;
    }
}