var express = require('express');
var mysql = require('mysql');
var conn = require('./DbConnection.js');
var dao = require('./Dao.js');

//DbConn();
//MongoConn();
//OracleConnect();

console.log(dao.MongoInsert('2','bilal','25','7600.87','Dubai'));
console.log(dao.MysqlInsert('2','bilal','25','7600.87','Dubai'));
console.log(dao.OracleInsert('2','bilal','25','7600.87','Dubai'));

function DbConn(){
conn.con.connect(function(err) {
  if (err)
    console.log(err);
  console.log('Database connected');
  })
}

function MongoConn(){
conn.mongoClient.connect(conn.url, function(err, db) {
  if (err)
      console.log(err);
    console.log('Mongodb database connected');
  //  db.close();
  });
}

function OracleConnect(){
conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
    if (err) { console.error(err); return; }
    connection.execute(
      "select * from alhamd.challan",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
  });
}