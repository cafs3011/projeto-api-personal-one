const status = require("http-status");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (request, response, next) =>{

    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(status.UNAUTHORIZED).send({error:'No token provider'});
    }
    const parts = authHeader.split(' ');

    if(!parts.length === 2 ){
        return response.status(status.UNAUTHORIZED).send({error:'Token error'});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return response.status(401).send({error:'Token malformatted'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if(err){
        return response.status(status.UNAUTHORIZED).send({error: "Token invalid"});
        }
    resquest.userId = decoded.id;
    next();
})
};