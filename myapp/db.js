const { Pool } = require('pg');

const pool = new Pool({
    user: 'divicgress',
    password: 'Lamansiangganang20',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'your_database_name'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};