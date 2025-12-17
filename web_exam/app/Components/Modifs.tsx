
"use client"; // Indispensable pour utiliser useState

import { useState } from "react";
import { editArticle, deleteArticle } from "@/app/editer/action"; 
import ArticlesEntry from "./ArticlesEntry";

type ArticleRowProps = {
  article: {
    id: string;
    title: string;
    date: string;
    link: string;
    description: string;
    auteur: string;
  };
};

export default function Articlemodif({ article }: ArticleRowProps) {
  const [isEditing, setIsEditing] = useState(false);


  if (isEditing) {
    return (
      <div className="bg-slate-50 p-4 border-2 border-sky-200 rounded-xl mx-4 my-8">
        <form
          action={async (formData) => {
            await editArticle(formData);
            setIsEditing(false);
          }}
          className="flex flex-col gap-3"
        >
          <input type="hidden" name="id" value={article.id} />

          <div className="flex gap-2">
            <input
              name="title"
              defaultValue={article.title}
              className="flex-1 p-2 rounded border border-slate-300"
              placeholder="Titre de l'article"
              required
            />
            <input
              name="auteur"
              defaultValue={article.auteur}
              className="flex-1 p-2 rounded border border-slate-300"
              placeholder="auteur"
              required
            />
          </div>

          <input
            type="date"
            name="date"
            defaultValue={article.date}
            className="p-2 rounded border border-slate-300"
            placeholder="Date de publication"
            required
          />
          <input
            name="description"
            defaultValue={article.description}
            className="p-2 rounded border border-slate-300"
            placeholder="Contenu de l'article"
            required
          />
          <input
              type="url"  
              name="link"
              defaultValue={article.link}
              className="w-full p-2 pl-10 rounded border border-slate-300 text-blue-600 underline"
              placeholder="https://monsite.com"
              pattern="https://.*" 
              title="Le lien doit commencer par https://"
              required
            />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-slate-500 hover:text-slate-700 px-3 py-1"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Sauvegarder ✅
            </button>
          </div>
        </form>
      </div>
    );
  }

  // SI ON EST EN MODE AFFICHAGE : On affiche la carte normale
  return (
    <div className="relative group">
      <ArticlesEntry
        title={article.title}
      >
        <div className="flex justify-between items-start">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold text-slate-700">Auteur : </span>
              {article.auteur}
            </li>
            <li>
              <span className="font-semibold text-slate-700">Date de publication : </span>
              {article.date}
            </li>
            <li>
              <span className="font-semibold text-slate-700">Contenu de l'article : </span>
              {article.description}
            </li>
            <li>
              <span className="font-semibold text-slate-700">Lien de l'article : </span>
              <a 
                    href={article.link}           // L'adresse où aller
                    target="_blank"               // Ouvre dans un nouvel onglet (très conseillé)
                    rel="noopener noreferrer"     // Sécurité obligatoire quand on utilise target="_blank"
                    className="text-sky-600 hover:text-sky-800 hover:underline break-all" // Style bleu + gestion des liens trop longs
                >
                    {article.link}
                </a>
            </li>
          </ul>

          <div className="flex flex-col gap-2 ml-4">
            {/* BOUTON MODIFIER */}
            <button
              onClick={() => setIsEditing(true)}
              className="text-sky-600 hover:text-sky-800 text-sm font-bold border border-sky-200 hover:bg-sky-50 rounded px-2 py-1 transition"
            >
              Modifier ✏️
            </button>

            {/* BOUTON SUPPRIMER */}
            <form action={deleteArticle.bind(null, article.id)}>
              <button
                type="submit"
                className="text-red-400 hover:text-red-700 text-sm font-bold border border-red-200 hover:bg-red-50 rounded px-2 py-1 transition w-full"
              >
                Supprimer 🗑️
              </button>
            </form>
          </div>
        </div>
      </ArticlesEntry>
    </div>
  );
}