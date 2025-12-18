import { ReactNode } from "react"

type ReservationsEntryProps = {
    nom: string
    children: ReactNode
}

export default function ReservationsEntry(props: ReservationsEntryProps) {
    return (
        <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm mx-4 my-8">
                <h3 className="text-xl font-bold text-sky-800">{props.nom}</h3>
            <div className=" text-xl italic text-slate-500">
                {props.children}
            </div>
        </div>
    )
}