import pg from "pg"
import readline from "readline-sync"
import { creds } from "./creds.js"
const { Pool } = pg

const pool = new Pool(creds);
const query ='SELECT * FROM customers'

pool.query(query, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.rows)
    pool.end();
});