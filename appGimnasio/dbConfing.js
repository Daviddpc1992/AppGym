const mysql = require('mysql');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'gimnasioespartaco',
    port: 3306
});

global.db = pool;