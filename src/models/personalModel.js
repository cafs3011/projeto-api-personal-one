const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Usuario = require('./usuarioModel');
const Model = Sequelize.Model;

class Personal extends Model{}
module.exports = Personal.init({

    id:{
        allownull:false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
    },
    telefone:{
        allowNull: false,
        require:true,
        type: Sequelize.STRING(15),
        validate:{
          isNumeric:true
        }
    }/*,
    usuario_id:{
        type: Sequelize.INTEGER,
        unique:true,
        references:{
            model: Usuario,
            key:"id"
        }
    }*/
},{
    sequelize,
    modelName: "personal",
    freezeTableName:true
    }
);

Personal.belongsTo(Usuario,{foreignKey :'usuario_id', targetKey: 'id'});