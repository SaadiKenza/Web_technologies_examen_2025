import ArticlesEntry from "../Components/ArticlesEntry";
import { getArticles } from "./action";
import Articlemodif from "../Components/Modifs";

export default async function Aritcles() {
    const articles = await getArticles();

    return(
        <>
            <h1 className="text-center text-3xl my-8">Modifications des articles</h1> 


            {/* --- LISTE DES article --- */}
            <div className="space-y-4">
                {articles.map((article) => (
                    <Articlemodif key={article.id} article={article} />
                ))}
            </div>
        </>
    )
}