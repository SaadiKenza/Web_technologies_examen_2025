import ReservationsEntry from "../Components/ReservationsEntry";
import { getReservations, createReservation} from "./action";

export default async function Reservations() {
    const reservations = await getReservations();

    return(
        <>
            <h1 className="text-center text-3xl my-8">Réservations</h1> 

            <div className="bg-slate-100 p-6 border-2 border-dashed border-slate-300 rounded-xl mx-4 mb-8">
                <h2 className="text-xl font-bold text-slate-700 mb-4">Ajouter une nouvelle réservation</h2>
                <form action={createReservation} className="flex flex-col gap-3">
                    <input name="nom" type="text" placeholder="nom" className="p-2 rounded border border-slate-300" required />
                    <input type="date" name="numeroGSM" placeholder="NumeroGSM" className="p-2 rounded border border-slate-300" required />
                    <input name="nbpersonnes" type="text" placeholder="nb de personnes" className="p-2 rounded border border-slate-300" required />
                    <input name="heure" type="text" placeholder="heure" className="p-2 rounded border border-slate-300" required />
                    <button type="submit" className="bg-sky-800 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 transition mt-2 cursor-pointer">
                        Ajouter la nouvelle réservation
                    </button>
                </form>
            </div>


        </>
    )
}