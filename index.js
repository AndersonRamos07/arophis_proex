const express = require('express');
const http = express();
const User = require('./routers/users');
const bodyParser = require('body-parser');


http.use(bodyParser.urlencoded({extended: false}));
http.use(bodyParser.json())
http.use('/user', User);

http.use((req, res, next) =>{
    const erro = new Error('Não encontrado!');
    erro.status = 404;
    next(erro);
});

http.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

http.listen(9000);