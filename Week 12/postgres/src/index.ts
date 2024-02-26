// write a function to create a users table in your database.
import { Client } from 'pg'

const connectionString = "postgres://avnadmin:AVNS_IZOEPdiDRk8FarVN5Zs@pg-2aaaa7c2-yrohithreddy12-64b1.a.aivencloud.com:21712/defaultdb?sslmode=require"

const client = new Client({
    connectionString: connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });

async function insertRandomUser() {
    await client.connect();
    
    // Generating random values
    const randomUsername = `user_${Math.random().toString(36).substring(7)}`;
    const randomEmail = `${randomUsername}@example.com`;
    const randomPassword = Math.random().toString(36).substring(7);

    const queryText = `
        INSERT INTO users2 (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING *;  // This will return the inserted row
    `;

    try {
        const result = await client.query(queryText, [randomUsername, randomEmail, randomPassword]);
        console.log(result.rows[0]);  // Assuming you want to see the inserted record
    } catch (err) {
        console.error('Error inserting random user:', err);
    }
}

insertRandomUser()