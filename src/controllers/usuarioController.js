const Usuario = require("../models/usuarioModel");
const status = require("http-status");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/autorizacao');
const express = require('express');


exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  Usuario.findByPk(id)
    .then(usuario => {
      if (usuario) {
        response.status(status.OK).send(usuario);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    //
    .catch(error => next(error));
};

exports.buscarTodos = async (request, response, next) => {
  try{

      let limite = parseInt(request.query.limite || 0);
      let pagina = parseInt(request.query.pagina || 0);

      if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
        response.status(status.BAD_REQUEST).send();
      }

      const ITENS_POR_PAGINA = 10;

      limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
      pagina = pagina <= 0 ? 0 : pagina * limite;

      const usuarios = await Usuario.findAll({limit: limite, offset: pagina });

      response.send(usuarios);
  }
  catch(error) {
       next(error);
      };
};

exports.criar = async(request, response, next) => {
  try{
  const usuario = await Usuario.create(request.body);
  
  
      if(!usuario){
        response.status(status.INTERNAL_SERVER_ERROR);
      }
      else{
      
          usuario.senha = undefined;
            response.status(status.CREATED).send({
              usuario,
              token:generateToken({id:usuario.id})
            });
      }
      }
  catch(error){
    next(error);
  }
};

exports.atualizar = (request, response, next) => {
  const id = request.params.id;


  Usuario.findByPk(id)
    .then(usuario => {
      if (usuario) {
        Usuario.update(
          request.body,
          { where: { id: id } }
        )
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

exports.excluir = (request, response, next) => {
  const id = request.params.id;

  Usuario.findByPk(id)
    .then(usuario => {
      if (usuario) {
        Usuario.destroy({
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


exports.autenticacao = async(request, response) => {
  const {email, senha} = request.body;


  //const usuario = await Usuario.findOne({where:{ email:emailSolicitado }});

  const usuario = await Usuario.findOne({where:{email:email }});
  
    if(!usuario)
    {
      return response.status(status.NOT_FOUND).send();
    }
    else if(!bcrypt.compareSync(senha,usuario.senha)) {
      return response.status(status.UNAUTHORIZED).send();
    }
    usuario.senha = undefined;
    

    response.send({
      usuario, token:
      generateToken({id:usuario.id})

    });
  };

function generateToken(params={}){
return jwt.sign(params,authConfig.secret,
  {
    expiresIn:86400
  });
};