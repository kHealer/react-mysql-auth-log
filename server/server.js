require("dotenv").config();
const express = require('express');
const app= express();
const mysql = require('mysql');
const cors = require('cors');

// console.log(process.env.PASSWORD)

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: process.env.PASSWORD,
    database: 'loginsystem',
    
});


app.post('/register', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        if (err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    }
    
    );
});

app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
     (err, result) => {
        if (err){
            res.send({err: err})
        }
        
        if (result.length > 0){
                res.send(result);
        }else{
                res.send({message:"Wrong username or password"});
            }
        
    }
    );
});




app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
})