module.exports = class personalModelView
{

    constructor(usuario, personal){
        this.id = personal.id;
        this.telefone = personal.telefone;
        this.usuario_id = usuario.id;
        this.nome = usuario.nome;
        this.cpf = usuario.cpf;
        this.email = usuario.email;
        
    }
}