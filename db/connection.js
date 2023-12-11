// mysql2 모듈을 불러옵니다.
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const { establishSSHconnection } = require("./ssh.js");

dotenv.config();

async function setConnection () {
  await establishSSHconnection();
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,     // MySQL 호스트 주소
    user: process.env.DB_USER_NAME,         // MySQL 사용자 이름
    password: process.env.DB_USER_PASSWORD, // MySQL 비밀번호
    database: process.env.DB_NAME   // 사용할 데이터베이스 이름 
  });
  console.log(`DB connection`);
  return connection;
}

const connection = setConnection();


module.exports = {
  connection
}
