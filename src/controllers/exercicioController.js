const Exercicio = require("../models/exercicioModel");
const status = require("http-status");
const express = require('express');

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;

    Exercicio.findByPk(id)
    .then(exercicio => {
      if (exercicio) {
        response.status(status.OK).send(exercicio);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    //
    .catch(error => next(error));
};

exports.buscarTodos = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);
    
    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
        response.status(status.BAD_REQUEST).send();
    }
    
    const ITENS_POR_PAGINA = 10;
    
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
    
    Exercicio.findAll({ limit: limite, offset: pagina })
        .then(exercicio => {
        response.send(exercicio);
        })
        .catch(error => next(error));
};

exports.criar = (request, response, next) => {
    const nome = request.body.nome;
    const descricao = request.body.descricao;
  
    Exercicio.create({
      nome: nome,
      descricao: descricao
    })
      .then(exercicio => {
        response.status(status.CREATED).send(exercicio);
      })
      .catch(error => next(error));
  };

  exports.atualizar = (request, response, next) => {
    const id = request.params.id;
  
    const nome = request.body.nome;
    const descricao = request.body.descricao;
  
    Exercicio.findByPk(id)
      .then(exercicio => {
        if (exercicio) {
            Exercicio.update(
            {
              nome: nome,
              descricao: descricao
            },
            { where: { id: id } }
          )
            .then(exercicioAtualizado => {
              response.status(status.OK).send(exercicioAtualizado);
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };

  exports.excluir = (request, response, next) => {
    const id = request.params.id;
  
    Exercicio.findByPk(id)
      .then(exercicio => {
        if (exercicio) {
          Exercicio.destroy({
            where: { id: id }
          })
            .then(() => {
              response.status(status.OK).send();
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };