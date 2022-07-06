const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Rota INICIAL'
    })
});

router.get('/:id', (req, res, next) =>{
    const id = req.params.id;
    res.status(200).send({
        mensagem: 'Rota com ID',
        id: id
    })
});