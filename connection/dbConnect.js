var mysql = require('mysql');

var conn = mysql.createConnection('mysql://root:mysql@127.0.0.1/dm107_lh_root');

     
var getConnection = conn.connect(function(err, res){
    if(!err){
        console.log('DB connected');
    }else{
        console.log('DB error.');
        res.status(503).send(err);
    }
});


module.exports = conn;