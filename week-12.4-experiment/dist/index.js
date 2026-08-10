import { Client } from 'pg';
const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
// async function createTable() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result);
// }
// createTable();
async function insertUserData(username, password, email) {
    await client.connect();
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ( '${username}', '${password}', '${email}' )
    `);
    console.log(result);
}
insertUserData('Karthick', 'karthick@04', 'karthick@gmail.com');
//# sourceMappingURL=index.js.map