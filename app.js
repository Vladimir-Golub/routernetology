var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end('Hello Express.js');
});

app.

// var middleware_1 = function (req, res, next) {
//     console.log('middleware 1');
//     next();
// };
//
// var middleware_2 = function (req, res, next) {
//     console.log('middleware 2');
//     next();
// };
//
// var middleware_3 = function (req, res, next) {
//     console.log('middleware 3');
//     next();
// };
//
// app.get('/book/:id', (req, res) => {
//     let id = req.params.id;
//
//     res.json({id});
// });
//
// app.all('/',
//     middleware_1,
//     middleware_2,
//     (req, res) => {
//     res.json({status: 'OK'})
// });
//
//
// app.all('*', (req, res) => {
//    res.json({status: 'bad request'})
// });

app.listen(3000, () =>  {
    console.log('run');
});