import { getArticles } from "../editer/action";
import ArticlesEntry from "../Components/ArticlesEntry";

export default async function ArticlePage() {
      const articles = await getArticles();

  return (
    <div className="container mx-auto max-w-2xl">
      <h1 className="text-center text-3xl my-8 text-sky-900 font-bold">
        Liste des articles
      </h1>

      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="relative group">
            <ArticlesEntry 
                title={article.title} 
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold text-slate-700">Date de publication : </span>
                  {article.date}
                </li>
                <li>
                  <span className="font-semibold text-slate-700">Nom de l'auteur: </span>
                  {article.auteur}
                </li>
                <li>
                  <span className="font-semibold text-slate-700">contenu de l'article : </span>
                  {article.description}
                </li>                
              </ul>
            </ArticlesEntry>
          </div>
        ))}

        {articles.length === 0 && (
            <p className="text-center text-slate-500 italic">Aucun article sur le site...</p>
        )}
      </div>
    </div>
  );
}