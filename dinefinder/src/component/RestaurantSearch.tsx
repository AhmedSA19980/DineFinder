"use client";

import { useEffect, useState } from "react";
import type { Restaurant } from "@/types/restaurantsty";
import { RestaurantCard } from "./restaurantcard";



export default function RestaurantSearch(){
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [search , setSearch] = useState("");
    const [cuisine, setCuisine] = useState("All");
    const [minimumRating, setMinimumRating] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
      
      async function getRestaurants() {
        try {
          const response = await fetch("/api/restaurants");
          const data: Restaurant[] = await response.json();
          setRestaurants(data);
        } catch (error) {
          console.error("Failed to fetch restaurants", error);
        } finally {
          setLoading(false);
        }
      }  

      getRestaurants();
    },[])


    const filteredRestaurants = restaurants.filter(
        (restaurant)=> {
            const matchSearch= restaurant.name.toLowerCase().includes(search.toLowerCase());

            const matchCuisine = cuisine === "All" || restaurant.cuisine === cuisine;

            const matchRating =  restaurant.rating >= minimumRating;
            
            return (matchSearch && matchCuisine && matchRating);
        }

    
    );
     if (loading) {
        return (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-64 animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </section>
        );
     }

     return (
       <div>
         <div className="flex flex-col gap-4 md:flex-row">
           <input
             type="text"
             placeholder="Search restaurants..."
             value={search}
             onChange={(event) => setSearch(event.target.value)}
             className="rounded-lg border px-4 py-2"
           />

           <select
             value={cuisine}
             onChange={(event) => setCuisine(event.target.value)}
             className="rounded-lg border px-4 py-2"
           >
             <option value="All">All Cuisines</option>
             <option value="Italian">Italian</option>
             <option value="Japanese">Japanese</option>
             <option value="Steakhouse">Steakhouse</option>
             <option value="American">American</option>
           </select>

           <select
             value={minimumRating}
             onChange={(event) => setMinimumRating(Number(event.target.value))}
             className="rounded-lg border px-4 py-2"
           >
             <option value="0">Any Rating</option>
             <option value="4">4.0+</option>
             <option value="4.5">4.5+</option>
             <option value="4.7">4.7+</option>
           </select>
         </div>
         {/** Filters will go here  */}
         {filteredRestaurants.length === 0 ? (
           <p className="mt-8 text-gray-600">No restaurants found.</p>
         ) : (
           <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {filteredRestaurants.map((restaurant) => (
               <RestaurantCard key={restaurant.id} restaurant={restaurant} />
             ))}
           </section>
         )}
       </div>
     );
}