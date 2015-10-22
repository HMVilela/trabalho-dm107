var express = require('express');
var router = express.Router();
var conn = require('../connection/dbConnect.js');

var notFound = function(res){
    res.status(404).send('Not found!');
};

// get por id da tblDelivery
router.get('/:id', function(req, res) {
    var sql = 'SELECT * FROM tblDelivery WHERE id = ' + req.params.id + ' ;';
    conn.query(sql, function(err, rows, fields){
        if(!err){
            if(rows.length > 0){
                res.status(201).json(rows);
            }else{
                console.log('This delivery was not found.');
                res.status(404).send(notFound);
            }
        }else{
            console.log('Error.');
            res.status(404).send(notFound);
        }
    });
});

router.get('/:orderIdFk/:userIdFk', function(req, res) {
    var sql = 'SELECT * FROM tblDelivery WHERE orderIdFk = ' + req.params.router.get('/:orderIdFk/:userIdFk', function(req, res) {
 + ' AND userIdFk = ' + req.params.userIdFk + ' ;';
    conn.query(sql, function(err, rows, fields){
        if(!err){
            if(rows.length > 0){
                res.status(201).json(rows);
            }else{
                console.log('This delivery was not found.');
                res.status(404).send(notFound);
            }
        }else{
            console.log('Error.');
            res.status(404).send(notFound);
        }
    });
});

router.get('/', function(req, res){
    var sql = "SELECT * FROM tblDelivery";
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

router.post('/', function(req, res){
    var obj = req.body;
    var sql = 'INSERT INTO tblDelivery SET ?';
    conn.query(sql, obj, function(err, result){
        if(!err){
            console.log('Delivery inserted');
            res.status(201).json("id:" + result.insertId);
        }else{
            console.log('Error. The delivery was not inserted');
            res.status(404).json(notFound);
        }
    });
});

router.put('/:id/:orderIdFk/:userIdFk', function(req, res){
    var obj = req.body;
    if(req.params.id != obj.id || req.params.orderIdFk != obj.orderIdFk || req.params.userIdFk != obj.userIdFk){
        console.log("Error. Id does not match");
        res.status(404).json(notFound);
    }else{
        var sql = "UPDATE tblDelivery SET receiverAddress= '" + obj.receiverAddress + "', receiverZipcode= '" + obj.receiverZipcode + "', receiverCity= '" + obj.receiverCity + "', receiverState= '" + obj.receiverState + "', deliveryDate= '" + obj.deliveryDate + "', deliveryStatus= '" + obj.deliveryStatus + "' WHERE orderIdFk= " + obj.orderIdFk + " AND userIdFk=" + obj.userIdFk;
        conn.query(sql, function(err, result){
            if(!err){
                console.log("Delivery updated");
                res.status(201).json(obj);
            }else{
                console.log("Error. The delivery was not updated");
                res.status(404).json(notFound);
            }
        });
    }
});

// delete por id da tblDelivery
router.delete('/:id', function(req, res){
    var sql = "DELETE FROM tblDelivery WHERE id = " + req.params.id;
    conn.query(sql, function(err, result){
        if(!err){
            console.log("Delivery deleted");
            res.status(201).json("User " + req.params.id + " deleted");
        }else{
            console.log("Error. The delivery was not deleted");
            res.status(404).json(notFound);
        }
    });
});

// delete por orderIdFk e userIdFk da tblDelivery
router.delete('/:orderIdFk/:userIdFk', function(req, res){
    var sql = "DELETE FROM tblDelivery WHERE orderIdFk = " + req.params.orderIdFk + " AND userIdFk = " + req.params.userIdFk;
    conn.query(sql, function(err, result){
        if(!err){
            console.log("Delivery deleted");
            res.status(201).json("User " + req.params.id + " deleted");
        }else{
            console.log("Error. The delivery was not deleted");
            res.status(404).json(notFound);
        }
    });
});
    
    
module.exports = router;