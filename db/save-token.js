import { connection } from "./connection.js";
import { getTokenByUserId } from "./get-token.js";

export async function saveToken(userId, token) {
    const token = await getTokenByUserId(userId);

    if (!token){
      const [rows, fields] = await connection.execute('insert into tokens values(?, ?)', [userId, token]);
      return rows;
    } else {
      const [rows, fields] = await connection.execute('update tokens set token = ? where userId = ?', [token, userId]);
      return rows;
    }
  }