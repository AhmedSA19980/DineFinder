import type { Restaurant } from "@/types/restaurantsty";


export async function getRestaurantISR():Promise<Restaurant[]> {
 
    const response = await fetch
    ("http://localhost:3001/restaurants",{
        next:{revalidate:10}
    });

    if(!response.ok){
        throw new Error("Failed to fetch restaurants");
    }


    return response.json();
}