const express = require('express');
const http = express();
const User = require('./routers/users');
const bodyParser = require('body-parser');

//  CORS
http.use((req, res, next) =>{
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'options'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
        return res.status(200).send({});
    }
    next();
})


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