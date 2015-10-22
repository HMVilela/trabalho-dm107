var express = require('express');
var router = express.Router();
var conn = require('../connection/dbConnect.js');

var notFound = function(res){
    res.status(404).send('Not found!');
};


router.get('/:id', function(req, res) {
    var sql = 'SELECT * FROM tblDelivery WHERE id = ' + req.params.id + ' ;';
    conn.query(sql, function(err, rows, fields){
        if(!err){
            if(rows.length > 0){
                res.status(201).json(rows);
            }else{
                console.log('This user was not found.');
                res.status(404).send(notFound);
            }
        }else{
                console.log('Error.');
                res.status(404).send(notFound);
        }
    });
});




module.exports = router;