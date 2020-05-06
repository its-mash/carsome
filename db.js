import mysql from 'mysql';
import 'dotenv/config.js'

//local mysql db connection
const connection = mysql.createConnection({
    host     : process.env.MY_SQL_SERVER,
    user     : process.env.MY_SQL_USER,
    password : process.env.MY_SQL_PASS,
    database : process.env.MY_SQL_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the MySQL server.');

});

export default connection;