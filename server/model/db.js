const {Pool} = require('pg');
const myURI = '';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({connectionString:myURI});

module.exports = {
    query:(command)=>{
        return pool.query(command)
    }
};