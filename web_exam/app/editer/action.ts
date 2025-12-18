'use server'

import { db } from '@/db'
import { ReservationsTable } from '@/db/schema' 
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getReservations() {
  return await db.select().from(ReservationsTable);
}
// permet de modifier notre case déjà créer
export async function editReservation(formData: FormData) {
  const id = formData.get('id');
  const nom = formData.get('nom');
  const numeroGSM = formData.get('numeroGSM');
  const nbpersonnes= formData.get('nbpersonnes');
  const heure = formData.get('heure');

  if (!id || !nom || !numeroGSM || !nbpersonnes || !heure) return;

  await db
    .update(ReservationsTable)
    .set({
      nom: String(nom),
      numeroGSM: String(numeroGSM),
      nbpersonnes: String(nbpersonnes),
      heure: String(heure),
    })
    .where(eq(ReservationsTable.id, String(id)));

  redirect((await headers()).get('referer') ?? '/');
}

export async function deleteReservation(id: string) {
  await db.delete(ReservationsTable).where(eq(ReservationsTable.id, id));
  redirect((await headers()).get('referer')??'/')
}