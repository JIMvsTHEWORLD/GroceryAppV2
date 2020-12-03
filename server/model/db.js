const {Pool} = require('pg');
const myURI = 'postgres://puhkhywe:RKbknf3Af7CaQUPJGEfe5ydjJEdaSAV9@suleiman.db.elephantsql.com:5432/puhkhywe';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({connectionString:myURI});

/*
CREATE TABLE Grocery_List (
    id SERIAL PRIMARY KEY,
    item varchar(255),
    amount int,
    unit varchar(255),
    price int
);
*/

module.exports = {
    query:(command)=>{
        return pool.query(command)
    }
};