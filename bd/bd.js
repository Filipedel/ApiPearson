
//make connection


const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database:"pearson",
    password:'root',
    port:"5432",
});

module.exports = pool;