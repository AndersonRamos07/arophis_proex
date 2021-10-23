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

module.exports = router;