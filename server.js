var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use('./connection', express.static('dbCon'));

app.get('/', function(req, res){
    res.redirect('./index.html');
});

app.use('/api/user', require('./app/userApi'));
//app.use('/api/delivery', require('./app/deliveryApi'));

var server = app.listen(8080, function(){
    console.log('Server is up and running at http://localhost:8080');
});
        