var mysql = require('mysql');
var config = require('../config/default.js')

var pool  = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});

// 查表并返回数据
let query = function( sql, values ) {

    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                connection.query(sql, values, ( err, rows) => {

                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

}

// 用户表
users=
    `create table if not exists users(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 pass VARCHAR(40) NOT NULL,
 PRIMARY KEY ( id )
);`

// 创建表
let createTable = function( sql ) {
    return query( sql, [] )
}

// 建表
createTable(users)

// 注册用户
let insertData = function( value ) {
    let _sql = "insert into users(name,pass) values(?,?);"
    return query( _sql, value )
}

// 通过名字查找用户
let findDataByName = function (  name ) {
    let _sql = `
    SELECT * from users
      where name="${name}"
      `
    return query( _sql)
}

module.exports={
    query,
    createTable,
    insertData,
    findDataByName
}