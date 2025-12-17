import { ReactNode } from "react"

type ArticlesEntryProps = {
    title: string
    children: ReactNode
}

export default function ArticlesEntry(props: ArticlesEntryProps) {
    return (
        <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm mx-4 my-8">
                <h3 className="text-xl font-bold text-sky-800">{props.title}</h3>
            <div className=" text-xl italic text-slate-500">
                {props.children}
            </div>
        </div>
    )
}