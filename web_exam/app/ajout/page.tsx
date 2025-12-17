import ArticlesEntry from "../Components/ArticlesEntry";
import { getArticles, createArticle} from "./action";

export default async function Articles() {
    const articles = await getArticles();

    return(
        <>
            <h1 className="text-center text-3xl my-8">Articles</h1> 

            <div className="bg-slate-100 p-6 border-2 border-dashed border-slate-300 rounded-xl mx-4 mb-8">
                <h2 className="text-xl font-bold text-slate-700 mb-4">Ajouter un nouvel article</h2>
                <form action={createArticle} className="flex flex-col gap-3">
                    <input name="title" type="text" placeholder="Titre" className="p-2 rounded border border-slate-300" required />
                    <input type="date" name="date" placeholder="Date de publication" className="p-2 rounded border border-slate-300" required />
                    <input name="description" type="text" placeholder="contenu" className="p-2 rounded border border-slate-300" required />
                    <input type="url"  name="link" className="w-full p-2 pl-10 rounded border border-slate-300 text-blue-600 underline" placeholder="https://monsite.com"
                        pattern="https://.*" // Optionnel : force le https
                        title="Le lien doit commencer par https://"
                        required
                    />
                    <input name="auteur" type="text" placeholder="auteur" className="p-2 rounded border border-slate-300" required />
                    <button type="submit" className="bg-sky-800 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 transition mt-2 cursor-pointer">
                        Ajouter le nouvel article
                    </button>
                </form>
            </div>


        </>
    )
}