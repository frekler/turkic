import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const claims = sqliteTable('claims', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  code: text('code').notNull().unique(),
  timestamp: integer('timestamp').notNull(),
});

export type Claim = typeof claims.$inferSelect;
export type NewClaim = typeof claims.$inferInsert;