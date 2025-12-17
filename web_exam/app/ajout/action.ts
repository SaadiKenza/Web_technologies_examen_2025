'use server'

import { db } from '@/db'
import { ArticlesTable } from '@/db/schema' 
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getArticles() {
  return await db.select().from(ArticlesTable);
}

export async function createArticle(formData: FormData) {
  const title = formData.get('title');
  const date = formData.get('date');
  const description = formData.get('description');
  const link = formData.get('link');
  const auteur = formData.get('auteur');

  if (!title || !date || !description || !link || !auteur) return;

  await db.insert(ArticlesTable).values({
    title: String(title),
    date: String(date),
    description: String(description),
    link: String(link),
    auteur: String(auteur),
  });
  redirect((await headers()).get('referer')??'/')
}

// permet de modifier notre case déjà créer
export async function editArticle(formData: FormData) {
  const id = formData.get('id');
  const title = formData.get('title');
  const date = formData.get('date');
  const description = formData.get('description');
  const link = formData.get('link');
  const auteur = formData.get('auteur');

  if (!id || !title || !date || !description || !link || !auteur) return;

  await db
    .update(ArticlesTable)
    .set({
      title: String(title),
      date: String(date),
      description: String(description),
      link: String(link),
      auteur: String(auteur),
    })
    .where(eq(ArticlesTable.id, String(id)));

  redirect((await headers()).get('referer') ?? '/');
}