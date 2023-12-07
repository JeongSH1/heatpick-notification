import { connection } from "./connection.js";

export async function saveToken(userId, token) {
    const [rows, fields] = await connection.execute('insert into tokens values(?, ?)', [userId, token]);
    return rows;
  }