const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'ROTA - Usuário'
    })
});

router.get('/:id', (req, res, next) =>{
    const id = req.params.id;

    if(id != '' || id != null){
        res.status(200).send({
            mensagem: 'ROTA - Usuário',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Não tem esse usuário aí não!'
        })
    }
});

router.post('/', (req, res, next) =>{
    var data = new Date;
    const usuario = {
        id: data,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
    };
    if(usuario.nome != null && usuario.nome != '' && usuario.nome != undefined){
        res.status(201).send({
            mensagem: 'Usuário Cadastrado!',
            usuarioCriado: usuario
        })
        i++
    } else{
        res.status(404).send({
            mensagem: 'Não foi possível cadastrar o usuário!'
        }) 
    }

})

module.exports = router;