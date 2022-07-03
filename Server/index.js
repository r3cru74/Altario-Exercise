const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyparser.json());

// Connection to database

const database = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_altario',
    port:3306
});

//check database

database.connect(err=>{
    if(err){console.log(err,'db error');}

    console.log('Database Connected');
})


//Get data from Database

app.get('/Api',(req,res)=>{
    console.log('get payment')

    let query = `SELECT * FROM Payment`;

    database.query(query,(err,result)=>{
        if(err){console.log(err,'db query error');}

        if(result.length>0){
            res.send({
                message:'all payments',
                data:result
            })
        }
    });

});

//get single Data from Database
app.get('/Api/:id',(req,res)=>{
    let gID = req.params.id;

    let query = `SELECT * FROM Payment WHERE id=${gID}`;

    database.query(query,(err,result)=>{
        if(err){console.log(err,'db query error');}

        if(result.length>0){
            res.send({
                message:'get id payments',
                data:result
            })
        }
    });
});

//Create data into database

app.post('/Api',(req,res)=>{
    console.log(req.body,'Post data');

    let name = req.body.name;
    let amount = req.body.amount;
    let code = req.body.code;
    let grid = req.body.grid;

    let query = `INSERT INTO Payment(name,amount,code,grid) values('${name}','${amount}','${code}','${grid}')`;

    database.query(query,(err,result)=>{
        if(err){console.log(err,'db query error');}

            res.send({
                message:'add data to payments',
                data:result
            })
        
    });
})

//Update database

app.put('/Api',(req,res)=>{
    console.log(req.body,'Update data');

    let id = req.params.id;
    let name = req.body.name;
    let amount = req.body.amount;
    let code = req.body.code;
    let grid = req.body.grid;

    let query = `UPDATE Payment SET name ='${name}', amount='${amount}', code='${code}', grid='${grid}' WHERE id=${id}`;

    database.query(query,(err,result)=>{
        if(err){console.log(err,'db query error');}

            res.send({
                message:'Update data to payments',
                data:result
            })
        
    });
})

//Delete item From Database

app.delete('/Api',(req,res)=>{
    console.log(req.body,'Delete data');

    let id = req.params.id;

    let query = `DELETE FROM Payment WHERE id='${id}'`;

    database.query(query,(err,result)=>{
        if(err){console.log(err,'db query error');}

            res.send({
                message:'Delete data to payments',
                data:result
            })
        
    });
})

//receive bias

app.post('/Api',(req,res)=>{
    console.log(req.body,'Get Bias');   
})

app.listen(port,()=>{
    console.log('Server running on port:'+port);
});