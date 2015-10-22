var express = require('express');
var router = express.Router();
var conn = require('../connection/dbConnect.js');

var notFound = function(res){
    res.status(404).send('Not found!');
};

// get por id da tblUser
router.get('/:id', function(req, res) {
    var sql = 'SELECT * FROM tblUser WHERE id = ' + req.params.id + ' ;';
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
// retorna todos os usuarios em tblUser
router.get('/', function(req, res){
    var sql = "SELECT * FROM tblUser";
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
// insert na tblUser com base no objeto vindo por parametro
router.post('/', function(req, res){
    var obj = req.body;
    var sql = 'INSERT INTO tblUser SET ?';
    conn.query(sql, obj, function(err, result){
        if(!err){
            console.log('User inserted');
            res.status(201).json("id:" + result.insertId);
        }else{
            console.log('Error. The user was not inserted');
            res.status(404).json(notFound);
        }
    });
});
// update na tblUser via id
router.put('/:id', function(req, res){
    var obj = req.body;
    if(req.params.id != obj.id){
        console.log("Error. Id does not match");
        res.status(404).json(notFound);
    }else{
        var sql = "UPDATE tblUser SET passw= '" + obj.passw + "', contactName= '" + obj.contactName + "', email= '" + obj.email + "', zipCode= '" + obj.zipCode + "', state= '" + obj.state + "', city= '" + obj.city + "', address= '" + obj.address + "', phoneNumber= '" + obj.phoneNumber + "' WHERE id= " + obj.id;
        
        conn.query(sql, function(err, result){
            if(!err){
                console.log("User updated");
                res.status(201).json(obj);
            }else{
                console.log("Error. The user was not updated");
                res.status(404).json(notFound);
            }
        });
    }
});
// delete por id da tblUser
router.delete('/:id', function(req, res){
    var sql = "DELETE FROM tblUser WHERE id = " + req.params.id;
    conn.query(sql, function(err, result){
        if(!err){
            console.log("User deleted");
            res.status(201).json("User " + req.params.id + " deleted");
        }else{
            console.log("Error. The user was not deleted");
            res.status(404).json(notFound);
        }
    });
});

module.exports = router;