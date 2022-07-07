const mysql = require('mysql2');
const env = require('./env');

class Database {
  constructor() {
    throw new Error('Use getInstance method');
  }

  static getInstance() {
    if (!Database.instance) {
      const pool = mysql.createPool({
        connectionLimit: 10,
        host: env.DB_HOST,
        user: env.DB_USER,
        database: env.DB_NAME,
      });
      Database.instance = pool.promise();
    }

    return Database.instance;
  }
}

module.exports = Database;
