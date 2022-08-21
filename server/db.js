import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: "mern-stack",
  user: "zdw8njqwz1v3",
  host: "fia5451ohdzd.aws-eu-west-2-1.psdb.cloud",
  password: "pscale_pw_QA-IeIkvkjYnn9y0j_a3jjSr5vuk3N70Tm_n6z2ORts",
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log("db.js is working");
