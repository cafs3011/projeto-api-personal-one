const Ficha = require("../models/fichaModel");
const Aquecimento = require("../models/aquecimentoModel");
const baseRepository = require("../repository/baseRepository");
const fichaRepository = require("../repository/fichaRepository");
const status = require("http-status");
const express = require('express');

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;

    fichaRepository.buscarUm(id, "fichaModel")
    .then(ficha => {
      if (ficha) {
        response.status(status.OK).send(ficha);
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
    
    fichaRepository.buscarTodos(limite,pagina,"fichaModel")
        .then(fichas => {
          if(fichas){
            response.status(status.OK).send(fichas);    
          }
          else{response.status(status.NOT_FOUND).send();}
    })};

exports.criar = (request, response, next) => {
          fichaRepository.criar(request.body,"fichaModel")
          .then(fichaCriada => {
            response.status(status.CREATED).send(fichaCriada);
          }).catch(error => next(error));
  };

  exports.atualizar = (request, response, next) => {
    const id = request.params.id;
  
    baseRepository.atualizar(id,request.body,"fichaModel")
            .then(fichaAtualizada => {
              if(fichaAtualizada)
              
                response.status(status.OK).send(fichaAtualizada);
              else response.status(status.NOT_FOUND).send();
            })
            .catch(error => next(error));
    };

  exports.excluir = (request, response, next) => {
    const id = request.params.id;
  
    baseRepository.excluir(id,"fichaModel")
      .then(fichaExcluida => {
        if(fichaExcluida)
          response.status(status.OK).send();
        else
          response.status(status.NOT_FOUND).send();
      })
      .catch(error => next(error));
  };