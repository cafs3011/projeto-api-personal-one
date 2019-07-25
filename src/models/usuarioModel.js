const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const bcrypt = require('bcryptjs');
const Model = Sequelize.Model;
const crypto = require('crypto');


class Usuario extends Model{}
module.exports =  Usuario.init(
{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    require : true,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  email: {
    allowNull: false,
    unique : true,
    require : true,
    type: Sequelize.STRING(100),
    validate: {
      len: [1, 100]
    }
  },
  senha: {
    allowNull: false,
    require : true,
    type: Sequelize.STRING(255),
    validate: {
      len: [1, 255]
    }
    /*get() {
      return () => this.getDataValue('senha')
  }*/
  },
  cpf: {
    allowNull: false,
    require : true,
    unique :true,
    type: Sequelize.STRING(11),
    validate: {
      len: [11, 11]
    }
  }
}, {
    sequelize, 
    modelName : "usuario",
    freezeTableName:true

});

Usuario.beforeCreate(async usuario => {
      try{
      return (usuario.senha = usuario.senha && usuario.senha != "" ? bcrypt.hashSync(usuario.senha, 10) : "");
      }
      catch (err) {
        throw new Error();
      }
});

Usuario.beforeUpdate(async usuario => {
  usuario.senha = bcrypt.hashSync(usuario.senha, 10);
});
