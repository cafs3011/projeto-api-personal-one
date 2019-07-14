const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const bcrypt = require('bcryptjs');
const Model = Sequelize.Model;
//
class Usuario extends Model{}
Usuario.beforeCreate((usuario) => {

  return bcrypt.hash(usuario.senha, 10)
      .then(hash => {
        usuario.senha = hash;
      })
      .catch(err => { 
          throw new Error(); 
      });
});
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
  },
  cpf: {
    allowNull: false,
    require : true,
    type: Sequelize.STRING(11),
    validate: {
      len: [11, 11]
    }
  }
}, {
    sequelize, 
    modelName : "usuario",
    freezeTableName:true,
    /*instanceMethods: {
        generateHash(senha) {
      return bcrypt.hash(senha, bcrypt.genSaltSync(10));
      },
      alidPassword(senha) {
          return bcrypt.compare(senha, this.senha);
  }}*/
});






/*const Usuario = sequelize.define("usuario", {
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
  },
  cpf: {
    allowNull: false,
    require : true,
    type: Sequelize.STRING(11),
    validate: {
      len: [11, 11]
    }
  }
});
module.exports = Usuario;*/
