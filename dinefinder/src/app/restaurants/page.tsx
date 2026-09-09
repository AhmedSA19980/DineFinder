import {RestaurantCard} from "@/component/restaurantcard";
import RestaurantSearch from "@/component/RestaurantSearch";
import { getRestaurants } from "@/service/restaurants.service";
import { Restaurant } from "@/types/restaurantsty";
import { Metadata } from "next";



export const revalidate = 10;

 const generatedAt = new Date().toLocaleTimeString();


export const metadata: Metadata = {
  title: "Restaurants",
  description:
    "Browse restaurants, discover new places to eat, and find your next dining experience.",
};

export default async function RestaurantsPage(){

  
  const restaurants :Restaurant[] | null  = await getRestaurants();
 
  console.log("data");
    return (
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">Discover Restaurants</h1>

        <p className="mt-2 text-gray-600">
          Find your next favorite restaurant.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Page generated at: {generatedAt}
        </p>

        {/*<section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </section>*/}

         <div>
          <RestaurantSearch />
        </div>
      </main>
    );
}