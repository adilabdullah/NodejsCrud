var express = require('express');
var mysql = require('mysql');
var mongo = require('mongodb');
var oracledb = require('oracledb');

var mongoClient=mongo.MongoClient;
var url = "mongodb://localhost:27017/banking";



var app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

//function OracleConnect(){

var oracleConn={
      user: "system",
      password: "porkish357",
      connectString: "(DESCRIPTION ="+
    "(ADDRESS = (PROTOCOL = TCP)(HOST = hp)(PORT = 1521))"+
    "(CONNECT_DATA ="+
      "(SERVER = DEDICATED)"+
      "(SERVICE_NAME = XE)))"
};

/*var oracleConn=oracledb.getConnection({
      user: "alhamd",
      password: "alhamd357",
      connectString: "XE =(DESCRIPTION ="+
    "(ADDRESS = (PROTOCOL = TCP)(HOST = hp)(PORT = 1521))"+
    "(CONNECT_DATA ="+
      "(SERVER = DEDICATED)"+
      "(SERVICE_NAME = XE)))"
});  */
/*, function(err, connection) {
if (err)
    console.error(err.message);
console.log('Oracle database connected');
}); */
//}

//DbConn();

/*function DbConn(){

con.connect(function(err) {
  if (err)
    console.log(err);
  console.log('Database connected');
  })
}  */


module.exports={con,mongoClient,url,oracleConn,oracledb}

/*var server = app.listen(5556, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})  */