
"use client"; // Indispensable pour utiliser useState

import { useState } from "react";
import { editReservation, deleteReservation } from "@/app/editer/action"; 
import ReservationsEntry from "./ReservationsEntry";

type ReservationRowProps = {
  reservation: {
    id: string;
    nom: string;
    numeroGSM: string;
    nbpersonnes: string;
    heure: string;
  };
};

export default function Reservationmodif({ reservation }: ReservationRowProps) {
  const [isEditing, setIsEditing] = useState(false);


  if (isEditing) {
    return (
      <div className="bg-slate-50 p-4 border-2 border-sky-200 rounded-xl mx-4 my-8">
        <form
          action={async (formData) => {
            await editReservation(formData);
            setIsEditing(false);
          }}
          className="flex flex-col gap-3"
        >
          <input type="hidden" name="id" value={reservation.id} />

          <div className="flex gap-2">
            <input
              name="nom"
              defaultValue={reservation.nom}
              className="flex-1 p-2 rounded border border-slate-300"
              placeholder="nom"
              required
            />
            <input
              name="heure"
              defaultValue={reservation.heure}
              className="flex-1 p-2 rounded border border-slate-300"
              placeholder="heure de réservation"
              required
            />
          </div>

          <input
            type="number"
            name="numeroGSM"
            defaultValue={reservation.numeroGSM}
            className="p-2 rounded border border-slate-300"
            placeholder="numéro de téléphone"
            required
          />
          <input
            type="number"
            name="nbpersonnes"
            defaultValue={reservation.nbpersonnes}
            className="p-2 rounded border border-slate-300"
            placeholder="nb de personnes"
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
      <ReservationsEntry
        nom={reservation.nom}
      >
        <div className="flex justify-between items-start">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold text-slate-700">heure : </span>
              {reservation.heure}
            </li>
            <li>
              <span className="font-semibold text-slate-700">Numéro de téléphone : </span>
              {reservation.numeroGSM}
            </li>
            <li>
              <span className="font-semibold text-slate-700">Nombre de personnes: </span>
              {reservation.nbpersonnes}
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
            <form action={deleteReservation.bind(null, reservation.id)}>
              <button
                type="submit"
                className="text-red-400 hover:text-red-700 text-sm font-bold border border-red-200 hover:bg-red-50 rounded px-2 py-1 transition w-full"
              >
                Supprimer 🗑️
              </button>
            </form>
          </div>
        </div>
      </ReservationsEntry>
    </div>
  );
}