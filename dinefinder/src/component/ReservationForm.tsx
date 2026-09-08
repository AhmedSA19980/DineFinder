"use client"

import { ReservationFormProps } from "@/types/ReservationFormProps"
import {  ReactElement, useState } from "react"



export function ReservationForm({restaurantId}:ReservationFormProps):ReactElement{

    const [date , setDate] = useState("");
    const [guests , setGuests] = useState(2);
    const [time, setTime] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const  handleSubmit = (event) =>{
        event.preventDefault();
         setError("");
         setSuccess("");

         if (!date) {
           setError("Please select a reservation date.");
           return;
         }

         if (!time) {
           setError("Please select a reservation time.");
           return;
         }

         if (guests < 1) {
           setError("Guest count must be at least 1.");
           return;
         }

         setSuccess(
           `Reservation request submitted for ${guests} guest(s) on ${date} at ${time}.`,
         );

         console.log({
           restaurantId,
           date,
           guests,
           time,
         });
    }

   return (
     <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border p-6">
       <div>
         <h2 className="text-xl font-semibold">Reserve a table</h2>
         <p className="text-sm text-gray-600">
           Choose your preferred date, time, and guest count.
         </p>
       </div>

       <div className="space-y-2">
         <label htmlFor="reservation-date" className="block font-medium">
           Date
         </label>

         <input
           id="reservation-date"
           type="date"
           value={date}
           onChange={(event) => setDate(event.target.value)}
           className="w-full rounded-md border px-3 py-2"
         />
       </div>

       <div className="space-y-2">
         <label htmlFor="reservation-guests" className="block font-medium">
           Guests
         </label>

         <input
           id="reservation-guests"
           type="number"
           min={1}
           max={20}
           value={guests}
           onChange={(event) => setGuests(Number(event.target.value))}
           className="w-full rounded-md border px-3 py-2"
         />
       </div>

       <div className="space-y-2">
         <label htmlFor="reservation-time" className="block font-medium">
           Time
         </label>

         <select
           id="reservation-time"
           value={time}
           onChange={(event) => setTime(event.target.value)}
           className="w-full rounded-md border px-3 py-2"
         >
           <option value="">Select a time</option>
           <option value="18:00">6:00 PM</option>
           <option value="19:00">7:00 PM</option>
           <option value="20:00">8:00 PM</option>
           <option value="21:00">9:00 PM</option>
         </select>
       </div>

       {error && (
         <p className="rounded-md bg-red-100 p-3 text-sm text-red-700">
           {error}
         </p>
       )}

       {success && (
         <p className="rounded-md bg-green-100 p-3 text-sm text-green-700">
           {success}
         </p>
       )}

       <button
         type="submit"
         className="rounded-md bg-black px-4 py-2 text-white"
       >
         Submit reservation
       </button>
     </form>
   );
}