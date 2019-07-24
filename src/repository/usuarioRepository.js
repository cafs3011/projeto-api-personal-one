const baseRepository = require("../repository/baseRepository");
exports.criar = async (body) => {

    return await baseRepository.criar(data,"usuarioModel");
};

exports.buscarUm = async(id, model) => {
    console.log(id);
    return await baseRepository.buscarUm(id,model);
};