import pg from "pg";
import readline from "readline-sync"

const { Client, Pool } = pg;

import { creds } from "./creds.js"

const pool = new Pool(creds);

async function runQuery(query) {
    return await pool.query(query)
}
while (true) {
    let answer = readline.question("Run What?")
    const query = ""
    switch (answer) {
        case "1": // 1. select * from customers
            const query = "SELECT first_name, last_name FROM customers"
            const rows = await runQuery(query)
            console.table(rows.rows)
            break;
        case "2": // 2. add a new customer
            query = `INSERT INTO customers(first_name,
             last_name, phone, email)
       VALUES ('Todd', 'Albert', '5615737773', 
       'todd@bocacode.com');`
            results = await runQuery(query)
            console.log('user added')
            break;
        case "3": // 3. update that customer
            query = `UPDATE customers
	SET first_name='super', 
	last_name='fantastic',
--	email=?, phone=?, 
-- 	created_at=?, 
	updated_at=NOW()
	WHERE customer_id=1;`
            results = await runQuery(query)
            break;
        default:
            console.log("que que!")
            break;

    }
}


