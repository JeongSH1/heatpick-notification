const { connection } = require('../db/connection.js');

class TokenManager {
    
    async saveToken(token, userId) {
        const [rows, fields] = await (await connection).execute('insert into token (token, userId) values(?, ?)', [token, userId]);
        return rows;
    }

    async getTokens(userId) {
        const [rows, fields] = await (await connection).execute('select token from token where userId = ?', [userId]);
        return rows;
    }
}

module.exports = { TokenManager };