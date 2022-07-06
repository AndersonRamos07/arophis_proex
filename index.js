const express = require('express');
const path = require('path');
const res = require('express/lib/response');
const http = express();

//const rotaUsers = require('./routes/users');

//http.use('/users', rotaUsers);

http.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname+'/public/html/index.html'))
//    res.send('Startando outro...')
})

http.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname+'/public/html/login.html'))
})

http.get('/index', (req, res) =>{
    res.sendFile(path.join(__dirname+'/public/js/index.html'))
})

http.get('/inicio', (req, res) =>{
    res.sendFile(path.join(__dirname+'/public/html/index.html'))
})

http.listen(9000, () => {
    console.log('Servidor rodando com o <http> ' + 'http://localhost:9000/');
});