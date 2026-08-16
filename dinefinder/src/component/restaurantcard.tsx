import { RestaurantCardProps } from "@/types/restaurantcardprops";
import Link from "next/link";




export const RestaurantCard = ({restaurant}:RestaurantCardProps)=>{

    return (
      <article className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">{restaurant.name}</h2>

        <p className="mt-2 text-sm text-gray-600">{restaurant.cuisine}</p>

        <p className="mt-1 text-sm text-gray-600">{restaurant.location}</p>

        <p className="mt-3">⭐ {restaurant.rating}</p>

        <p className="mt-3 text-gray-700">{restaurant.description}</p>

        <Link
          href={`/restaurants/${restaurant.id}`}
          className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white"
        >
          View Restaurant
        </Link>
      </article>
    );
}