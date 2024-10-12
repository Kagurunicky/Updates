const mysql = require ('mysql');
require('dotenv').config();

//create a pool to help if one connection is dropped
//also gets enviroment variables
const pool = mysql.createPool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});


module.exports = pool;