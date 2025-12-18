import { getReservations } from "../editer/action";
import ReservationsEntry from "../Components/ReservationsEntry";

export default async function ReservationPage() {
      const reservations = await getReservations();

  return (
    <div className="container mx-auto max-w-2xl">
      <h1 className="text-center text-3xl my-8 text-sky-900 font-bold">
        Liste des reservations
      </h1>

      <div className="space-y-4">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="relative group">
            <ReservationsEntry 
                nom={reservation.nom} 
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold text-slate-700">numéro de gsm : </span>
                  {reservation.numeroGSM}
                </li>
                <li>
                  <span className="font-semibold text-slate-700">heure: </span>
                  {reservation.heure}
                </li>
                <li>
                  <span className="font-semibold text-slate-700">Nb de personnes: </span>
                  {reservation.nbpersonnes}
                </li>                
              </ul>
            </ReservationsEntry>
          </div>
        ))}

        {reservations.length === 0 && (
            <p className="text-center text-slate-500 italic">Aucune réservation sur le site...</p>
        )}
      </div>
    </div>
  );
}