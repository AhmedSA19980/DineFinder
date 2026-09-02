import {RestaurantCard} from "@/component/restaurantcard";
import { Restaurant } from "@/types/restaurantsty";
import { getRestaurantISR } from "@/service/restaurantISR.service";




export const revalidate = 10;

 const generatedAt = new Date().toLocaleTimeString();

export default async function RestaurantsISRPage(){

  const restaurantsISRDb_Json: Restaurant[] | null = await getRestaurantISR(); 
 
    return (
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">Discover Restaurants</h1>

        <p className="mt-2 text-gray-600">
          Find your next favorite restaurant.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Page generated at: {generatedAt}
        </p>

    
        {/** ISR  

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </section>
        */}

        {/** ISR db.Json */}

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurantsISRDb_Json?.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </section>
      </main>
    );
}