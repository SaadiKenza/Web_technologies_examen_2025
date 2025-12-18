// db/schema.ts
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

// On change 'projects' en 'projects_table' (ou ce que vous voulez)
// Cela force la création d'une nouvelle table vide et propre
export const ReservationsTable = pgTable('Reservations', {
  id: uuid('id').defaultRandom().primaryKey(),
  nom: text('nom').notNull(),
  numeroGSM: text('numeroGSM').notNull(),
  nbpersonnes: text('nmpersonnes').notNull(),
  heure : text('heure').notNull(),
});