var mysql = require('mysql');
//var conn = mysql.createConnection('mysql://root:mysql@127.0.0.1/dm107_lh_root');
var conn = mysql.createConnection('mysql://root:@127.0.0.1/dm107_lh_root');
    
var getConnection = conn.connect(function(err){
    if(!err){
        console.log('Database is connected');
    }else{
        console.log('Error. Database is not connected.');
    }
});

module.exports = conn;