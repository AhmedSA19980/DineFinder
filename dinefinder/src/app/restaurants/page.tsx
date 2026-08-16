import {RestaurantCard} from "@/component/restaurantcard";
import { restaurants } from "@/data/restaurants";

export default function RestaurantsPage(){
    return (
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">Discover Restaurants</h1>

        <p className="mt-2 text-gray-600">
          Find your next favorite restaurant.
        </p>

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </section>
      </main>
    );
}