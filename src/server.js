const express = require('express');
const app = express();
const http = require('http');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const apiProxy = proxy('/api', {
    target: 'http://193.112.143.85:4443',
    changeOrigin: false,
    ws: true,
    pathRewrite: {
        '^api': '/api/v1'
    },
});

app.use(
    cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",//接受所有前端发的请求
        "preflightContinue": false,
        "optionsSuccessStatus": 200
    })
)
app.use('/api/*', apiProxy);
app.use('/api/*', (req, res, next) => {
    res.send(JSON.parse(req.bostText));
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
