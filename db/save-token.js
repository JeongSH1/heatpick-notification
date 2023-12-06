import { connection } from "./connection.js";

export async function saveToken(userId, token) {
    try {
      // SQL 쿼리
      const [rows, fields] = await connection.execute('insert into tokens values(?, ?)', [userId, token]);
        
      return rows;
      
    } catch (err) {
      console.error(err);
    }
  }