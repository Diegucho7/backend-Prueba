const { createPool } = require('mysql2/promise');



const pool = createPool({
    port: process.env.MYSQLDB_PORT,
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
});

console.log('Base de datos conectada');


module.exports = pool;