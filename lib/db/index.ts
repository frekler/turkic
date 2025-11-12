import * as schema from './schema';

// Lazy database connection - only initialize when accessed
let _db: any = null;

export const db = {
  get query() {
    if (!_db) {
      const { drizzle } = require('drizzle-orm/bun-sqlite');
      const { Database } = require('bun:sqlite');
      const sqlite = new Database('./data/claims.db');
      _db = drizzle(sqlite, { schema });
    }
    return _db.query;
  },
  get select() {
    if (!_db) {
      const { drizzle } = require('drizzle-orm/bun-sqlite');
      const { Database } = require('bun:sqlite');
      const sqlite = new Database('./data/claims.db');
      _db = drizzle(sqlite, { schema });
    }
    return _db.select;
  },
  get insert() {
    if (!_db) {
      const { drizzle } = require('drizzle-orm/bun-sqlite');
      const { Database } = require('bun:sqlite');
      const sqlite = new Database('./data/claims.db');
      _db = drizzle(sqlite, { schema });
    }
    return _db.insert;
  }
};

export { schema };