const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const bcrypt = require('bcryptjs');
const Model = Sequelize.Model;
<<<<<<< HEAD
const crypto = require('crypto');
=======
//
class Usuario extends Model{}

Usuario.beforeCreate((usuario) => {
>>>>>>> d1e19ce71ec19fcd560b7a61950b111150c50979


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
<<<<<<< HEAD
  /*salt: {
    type: Sequelize.STRING,
    get() {
        return() => this.getDataValue('salt')
    }
  }*/
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
=======
}, 
{
    sequelize, 
    modelName : "usuario",
    freezeTableName:true,
    classMethods :{
      generateHash: (senha) =>{
        return bcrypt.hashSync(senha, bcrypt.genSaltSync(10), null)
      }
    },
    instanceMethods: {
        verifyPassword: (password, databasePassword) => {
          return bcrypt.compareSync(password, databasePassword)
        }
      }
}
);
>>>>>>> d1e19ce71ec19fcd560b7a61950b111150c50979
