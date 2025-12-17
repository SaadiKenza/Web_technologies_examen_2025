// db/schema.ts
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

// On change 'projects' en 'projects_table' (ou ce que vous voulez)
// Cela force la création d'une nouvelle table vide et propre
export const ArticlesTable = pgTable('Articles', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  date: text('date').notNull(),
  description: text('description').notNull(),
  link: text('link').notNull(),
  auteur : text('auteur').notNull(),
});