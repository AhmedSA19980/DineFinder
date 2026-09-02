import { restaurants } from "@/data/restaurants";
import { Restaurant } from "@/types/restaurantsty";

export async function getRestaurant(id:number):Promise<Restaurant | null>{
  
  /*const response = await fetch(`http://localhost:3000/api/restaurants/${id}`
    ,{cache:"no-cache"}
  );*/

  await new Promise((resolve)=> 
    setTimeout(resolve ,500)
    );

    return (restaurants.find((restaurant) => restaurant.id ===id) ?? null)
  
}
