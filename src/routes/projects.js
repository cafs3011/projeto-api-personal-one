const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
router.use(authMiddleware);

//return response.status(status.FORBIDDEN).send({error:'Não sei o que é'});

router.get('/projects',(requisicao,response) => {
    response.send({ok:true, user: requisicao.userId} );
});

module.exports =router;