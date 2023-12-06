import { connection } from "./connection.js";

export async function getTokenByUserId(userId) {
    try {
      // SQL 쿼리
      const [rows, fields] = await connection.execute('SELECT token FROM tokens WHERE userId = ?', [userId]);
  
      // 결과 확인
      if (rows.length > 0) {
        return rows[0].token;
      } else {
        return null; // 해당 userId에 대한 데이터가 없을 경우
      }
    } catch (err) {
      throw err;
    }
  }