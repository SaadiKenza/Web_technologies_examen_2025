import ReservationsEntry from "@/app/Components/ReservationsEntry";
import { getReservations } from "@/app/booking/id/action";
import Reservationmodif from "@/app/Components/Modifs";

export default async function Reservations() {
    const reservations = await getReservations();

    return(
        <>
            <h1 className="text-center text-3xl my-8">Modifications des réservations</h1> 


            {/* --- LISTE DES reservation --- */}
            <div className="space-y-4">
                {reservations.map((reservation) => (
                    <Reservationmodif key={reservation.id} reservation={reservation} />
                ))}
            </div>
        </>
    )
}