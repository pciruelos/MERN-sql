import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: "mern-stack",
  user: "cqtzofsqfmqm",
  host: "fia5451ohdzd.aws-eu-west-2-1.psdb.cloud",
  password: "pscale_pw_u57HKm6XKN_tjKE-9o1tDVtXMwcEoBxDHmphEzb0RtE",
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log("db.js is working");
