import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: "mern-stack",
  user: "zuj36e01yu37",
  host: "fia5451ohdzd.aws-eu-west-2-1.psdb.cloud",
  password: "pscale_pw_fFJz0DBTgV5EiH__STYjwzfaLTkw5LGQaA1azhJJYdk",
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log("db.js is working");
