var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // password: 'admin',
    user: 'root',
    database: 'oee',
});

connection.connect();

connection.query('select * from dbmesin', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();