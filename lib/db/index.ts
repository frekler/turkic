import * as schema from './schema';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

// Initialize database immediately
const sqlite = new Database('./data/claims.db');

// Create table if it doesn't exist
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS claims (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    timestamp INTEGER NOT NULL
  );
`);

console.log('✅ Database initialized with Node.js SQLite');

export const db = drizzle(sqlite, { schema });

export { schema };