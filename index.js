var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    password: 'admin',
    user: 'root',
    // database: 'my_database',
});

connection.connect();

connection.query('show databases', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();