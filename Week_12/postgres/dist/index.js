"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const connectionString = "postgres://avnadmin:AVNS_IZOEPdiDRk8FarVN5Zs@pg-2aaaa7c2-yrohithreddy12-64b1.a.aivencloud.com:21712/defaultdb?sslmode=require";
const client = new pg_1.Client({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});
function insertRandomUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
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
            const result = yield client.query(queryText, [randomUsername, randomEmail, randomPassword]);
            console.log(result.rows[0]); // Assuming you want to see the inserted record
        }
        catch (err) {
            console.error('Error inserting random user:', err);
        }
    });
}
insertRandomUser();
