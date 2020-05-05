import mysql from 'mysql';

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'bnm',
    database : 'carsome'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the MySQL server.');

});

export default connection;