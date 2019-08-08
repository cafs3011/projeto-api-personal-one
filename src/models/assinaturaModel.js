const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Personal = require('./personalModel');
const Aluno = require('./alunoModel');
const Model = Sequelize.Model;

class Assinatura extends Model{}
module.exports = Assinatura.init({

    id:{
        allownull:false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
    },
    dataInicio: {
        allowNull: false,
        require:true,
        type: Sequelize.DATEONLY,
        validate: {
          isDate:true
        }
     },
     dataFim: {
        allowNull: false,
        require:true,
        type: Sequelize.DATEONLY,
        validate: {
          isDate:true
        }
      }
},{
    sequelize,
    modelName: "assinatura",
    freezeTableName:true
    }
);

Assinatura.belongsTo(Personal,{foreignKey :'personal_id', targetKey: 'id'});

Assinatura.belongsTo(Aluno,{foreignKey :'aluno_id', targetKey: 'id'});