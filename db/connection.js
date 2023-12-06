// mysql2 모듈을 불러옵니다.
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { establishSSHconnection } from "./ssh.js";

dotenv.config();
await establishSSHconnection();

// MySQL 연결 정보를 설정합니다.
export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,     // MySQL 호스트 주소
  user: process.env.DB_USER_NAME,         // MySQL 사용자 이름
  password: process.env.DB_USER_PASSWORD, // MySQL 비밀번호
  database: process.env.DB_NAME   // 사용할 데이터베이스 이름 
});

console.log(`DB connection`)

