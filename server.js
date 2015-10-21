var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res){
    res.redirect('./index.html');
});

app.use('/api/tasks', require('./app/taskApi'));

var server = app.listen(8080, function(){
    console.log('Server is up and running at http://localhost:8080');
});
        