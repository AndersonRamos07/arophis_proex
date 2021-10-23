const express = require('express');
const http = express();

const User = require('./routers/users');

http.get('/', (req, res, next) => {
    res.send('Olá Mundo!');
});

http.use('/user', User);

http.listen(9000);