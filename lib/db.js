import mysql from "mysql2";


  // Create the connection pool. The pool-specific settings are the defaults
  const dbPool = mysql.createPool({
    host: "162.55.131.89",
    user: "bvru2_bvrDba",
    password: "3JSJPaFKql[j",
    database: "bvru2_bvrmarket",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });

export default dbPool;