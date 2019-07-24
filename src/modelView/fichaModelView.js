module.exports = class fichaModelView
{

    constructor(ficha, aquecimentos){
        this.nome = ficha.nome;
        this.descricao = ficha.descricao;
        this.descansoPadrao = ficha.descansoPadrao;
        this.orientacao = ficha.orientacao;
        this.createdAt = ficha.createdAt;
        this.updatedAt = ficha.updatedAt;
        if(aquecimentos)
            this.aquecimentos = aquecimentos;
    }
}