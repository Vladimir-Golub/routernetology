var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end('Hello Express.js' + ку);
});

app.get('/hello', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end('Hello stranger !');
});

app.get('/hello/:name', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end('Hello, ' + req.params.name);
});

app.all('/sub/*', (req, res) => {
    res.end('You requested URI: ' + req.url); // Тут полный адрес ??? localhost итд ???
});

app.post('/post', (req, res) => {
    if (req.body == undefined) {
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
    } else {
        res.json(req.body);
    }
});

app.listen(3000, () =>  {
    console.log('run');
});