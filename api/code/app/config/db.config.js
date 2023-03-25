const mysql = require('mysql');
const dbserver = mysql.createConnection({
    host : "localhost",
    database: "inventory",
    user : "root",
    password : ""
});

dbserver.connect(error =>{
    if(error){
        console.log("Cannot connect to the database server");
        throw error;
    }
    console.log("Connected to the database");
})

module.exports = dbserver;