var express = require('express');
var mysql = require('mysql');
var conn = require('./DbConnection.js');
var dao = require('./Dao.js');
const loger = require('./Modules/logger.js');



////////////////////////////////////////////////
function OracleInsert(sno,name,age,salary,city){
conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
    if (err) { console.log(err); 
loger.PrintLog(err);
    }
 //   try{
  var sql="insert into alhamd.nodejs (sno,name,age,salary,city) values"+
"("+parseInt(sno)+",'"+name+"',"+parseFloat(age)+",'"+salary+"','"+city+"')";
   // console.log(sql);
/*    connection.execute(sql,
       function(err, result)
      {
        if (err) { console.log(err);}
        else {console.log(result); }
      }); */
    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { console.log(err); 
         loger.PrintLog(err);}

        else { console.log(result); 
        loger.PrintLog(result);}
      });
});
}


function MysqlInsert(sno,name,age,salary,city){
conn.con.connect(function(err)
  {
    if (err) { console.log(err);
    loger.PrintLog(err); }
    var sql="INSERT INTO banking.nodejs (sno,name,age,salary,city) VALUES ("+parseInt(sno)+",'"+name+"',"
      +parseFloat(age)+","+salary+",'"+city+"')";
    console.log(sql);
    conn.con.query(sql,
      function(err, result)
      {
        if (err) { console.log(err); 
        loger.PrintLog(err);}
        else{console.log("1 account save");
      loger.PrintLog("1 account save");}
      });
  });
}

function MongoInsert(sno,name,age,salary,city){
conn.mongoClient.connect(conn.url, function(err, db) {
  if (err) {console.log(err); 
  loger.PrintLog(err);}
  var dbo = db.db("banking");
  var myobj ={sno:sno,name:name,age:age,salary:salary,city:city};
  dbo.collection("Nodejs").insertOne(myobj, function(err, res) {
    if (err) {console.log(err);
    loger.PrintLog(err);}
    else {console.log("1 account save");
  loger.PrintLog("1 account save");}
    db.close();
  });
});
}
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
function OracleAll(){
conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
    if (err) { console.log(err); }
  var sql="select * from alhamd.nodejs";
   // console.log(sql);
    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { console.log(err); }

        else { console.log(result.rows); }
      });
});
}


function MysqlAll(){
conn.con.connect(function(err)
  {
    if (err) { console.log(err); }
    var sql="select * from banking.nodejs";
    console.log(sql);
    conn.con.query(sql,
      function(err, result)
      {
        if (err) { console.log(err); }
        else{console.log(result);}
      });
  });
}

function MongoAll(){
conn.mongoClient.connect(conn.url, function(err, db) {
  if (err) {console.log(err); }
  var dbo = db.db("banking");
//  dbo.collection("Nodejs").findOne({}, function(err, result) {    // To fid oly oe record 
   dbo.collection("Nodejs").find({}).toArray(function(err, result) {
    if (err) {console.log(err);}
    else {console.log(result);}
    db.close();
  });
});
}
//////////////////////////////////////////////////////

/////////////////////////////////////////////////////
function OracleDelete(id){
conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
    if (err) { console.log(err); }
  var sql="DELETE FROM alhamd.nodejs WHERE sno="+id;
   // console.log(sql);
    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { console.log(err); }

        else { console.log(result.rows); }
      });
});
}


function MysqlDelete(id){
conn.con.connect(function(err)
  {
    if (err) { console.log(err); }
    var sql="DELETE FROM banking.nodejs WHERE sno="+id;
    console.log(sql);
    conn.con.query(sql,
      function(err, result)
      {
        if (err) { console.log(err); }
        else{console.log(result.affectedRows);}
      });
  });
}

function MongoDelete(id){
conn.mongoClient.connect(conn.url, function(err, db) {
  if (err) {console.log(err); }
  var dbo = db.db("banking");
var myquery = {sno:id};
  dbo.collection("Nodejs").deleteOne(myquery, function(err, obj) {
    if (err) {console.log(err);}
    else {console.log('1 record deleted');}
    db.close();
  });
});
}
//////////////////////////////////////////////////////


/////////////////////////////////////////////////////
function OracleOne(id){
conn.oracledb.getConnection(conn.oracleConn,
  function(err, connection)
  {
    if (err) { console.log(err); }
  var sql="select * FROM alhamd.nodejs WHERE sno="+id;
   // console.log(sql);
    connection.execute(sql,
      [],{autoCommit:true},function (err, result){
         if (err) { console.log(err); }

        else { console.log(result.rows); }
      });
});
}


function MysqlOne(id){
conn.con.connect(function(err)
  {
    if (err) { console.log(err); }
    var sql="select * FROM banking.nodejs WHERE sno="+id;
//    console.log(sql);
    conn.con.query(sql,
      function(err, result)
      {
        if (err) { console.log(err); }
        else{console.log(result);}
      });
  });
}

function MongoOne(id){
conn.mongoClient.connect(conn.url, function(err, db) {
  if (err) {console.log(err); }
  var dbo = db.db("banking");
var myquery = { sno:id};
     dbo.collection("Nodejs").find(myquery).toArray(function(err, result) {
    if (err) {console.log(err);}
    else {console.log(result);}
    db.close();
  });
});
}
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
function FirstName(name)
{
  var e=name;
  return "My first name is:"+e;
}

function LastName(name)
{
  var e=name;
  return "My last name is:"+e;
}
function Age(age)
{
  var e=age;
  return "My age is:"+e;
}

console.log(FirstName('adil'));
console.log(LastName('abdullah'));
console.log(Age(31));

console.log(MongoInsert('4','farukh','42','65000','Sydney'));
console.log(MysqlInsert('4','farukh','42','65000','Sydney'));
console.log(OracleInsert('4','farukh','42','65000','Sydney'));

//console.log(OracleAll());
//console.log(MysqlAll());
//console.log(MongoAll());


//console.log(OracleDelete(3));
//console.log(MysqlDelete(3));
//console.log(MongoDelete(2));

//console.log(OracleOne(3));
//console.log(MysqlOne(3));
//console.log(MongoOne(3));
//module.exports={MongoInsert(),MysqlInsert(),OracleInsert()}
