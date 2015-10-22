var express = require('express');
var router = express.Router();
var conn = require('../connection/dbConnect.js');

var notFound = function(res){
    res.status(404).send('Not found!');
};

// get por id da tblOrder
router.get('/:id', function(req, res) {
    var sql = 'SELECT * FROM tblOrder WHERE id = ' + req.params.id + ' ;';
    conn.query(sql, function(err, rows, fields){
        if(!err){
            if(rows.length > 0){
                res.status(201).json(rows);
            }else{
                console.log('This order was not found.');
                res.status(404).send(notFound);
            }
        }else{
            console.log('Error.');
            res.status(404).send(notFound);
        }
    });
});
// retorna um pedido com base no userIdFk
router.get('/:userIdFk', function(req, res) {
    var sql = 'SELECT * FROM tblOrder WHERE userIdFk = ' + req.params.userIdFk;
    conn.query(sql, function(err, rows, fields){
        if(!err){
            if(rows.length > 0){
                res.status(201).json(rows);
            }else{
                console.log('This order was not found.');
                res.status(404).send(notFound);
            }
        }else{
            console.log('Error.');
            res.status(404).send(notFound);
        }
    });
});
// retorna todos os pedidos em tblOrder
router.get('/', function(req, res){
    var sql = "SELECT * FROM tblOrder";
    conn.query(sql, function(err, rows, fields){
        if(!err){
            if(rows.length > 0){
                res.status(201).json(rows);
            }else{
                console.log('This order was not found.');
                res.status(404).send(notFound);
            }
        }else{
            console.log('Error.');
            res.status(404).send(notFound);
        }
    });
});
    
// insert na tblDelivery com base no objeto vindo por parametro
router.post('/', function(req, res){
    var obj = req.body;
    var sql = 'INSERT INTO tblOrder SET ?';
    conn.query(sql, obj, function(err, result){
        if(!err){
            console.log('Order inserted');
            res.status(201).json("id:" + result.insertId);
        }else{
            console.log('Error. The order was not inserted');
            res.status(404).json(notFound);
        }
    });
});

// update na tblOrder via userIdFk
router.put('/:id/:userIdFk', function(req, res){
    var obj = req.body;
    if(req.params.id != obj.id || req.params.orderIdFk != obj.orderIdFk || req.params.userIdFk != obj.userIdFk){
        console.log("Error. Id does not match");
        res.status(404).json(notFound);
    }else{
        var sql = "UPDATE tblOrder SET orderStatus= '" + obj.orderStatus + "' WHERE id= " + obj.id + " AND userIdFk=" + obj.userIdFk;
        conn.query(sql, function(err, result){
            if(!err){
                console.log("Order updated");
                res.status(201).json(obj);
            }else{
                console.log("Error. The order was not updated");
                res.status(404).json(notFound);
            }
        });
    }
});

// delete por id da tblOrder
router.delete('/:id', function(req, res){
    var sql = "DELETE FROM tblOrder WHERE id = " + req.params.id;
    conn.query(sql, function(err, result){
        if(!err){
            console.log("Order deleted");
            res.status(201).json("User " + req.params.id + " deleted");
        }else{
            console.log("Error. The order was not deleted");
            res.status(404).json(notFound);
        }
    });
});

// delete por userIdFk da tblOrder
router.delete('/:id/:userIdFk', function(req, res){
    var sql = "DELETE FROM tblOrder WHERE id = " + req.params.id + " AND userIdFk = " + req.params.userIdFk;
    conn.query(sql, function(err, result){
        if(!err){
            console.log("Order deleted");
            res.status(201).json("User " + req.params.id + " deleted");
        }else{
            console.log("Error. The order was not deleted");
            res.status(404).json(notFound);
        }
    });
});
    
    
module.exports = router;