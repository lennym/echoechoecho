var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.all('*', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(req.body || {});
});

app.listen(process.env.PORT);