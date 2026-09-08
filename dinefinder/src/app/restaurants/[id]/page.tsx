import { getRestaurant as getRestaurantById } from "@/service/restaurant.service";
import Link from "next/link";
import Reviews from "@/component/getReviews";
import { Suspense } from "react";
import ReviewsSkeleton from "@/component/ReviewsSkeleton";
import { ReservationForm } from "@/component/ReservationForm";


export default async function RestaurantPage({params,}:RestaurantPageProps){
   
  const {id} = await params ;

    const restaurant = await getRestaurantById(Number(id));  // implement SSR
    //restaurants.find((restaurant)=> restaurant.id === Number(id)); * fetch data from browser
console.log("Restaurant page rendered:", restaurant?.id);
    if(!restaurant){
        return(
            <main className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-bold">
          Restaurant not found
        </h1>

        <Link
          href="/restaurants"
          className="mt-4 inline-block underline"
        >
          Back to restaurants
        </Link>
      </main>
        )
    }


    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <Link href="/restaurants" className="text-sm underline">
          ← Back to restaurants
        </Link>

        <p className="text-xs text-gray-500">
          Current route: /restaurants/{restaurant.id}
        </p>
        <article className="mt-8">
          <h1 className="text-4xl font-bold">{restaurant.name}</h1>

          <p className="mt-3 text-lg text-gray-600">{restaurant.cuisine}</p>

          <div className="mt-6 space-y-3">
            <p>
              <strong>Location:</strong> {restaurant.location}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {restaurant.rating}
            </p>
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            {restaurant.description}
          </p>
        </article>
        <Suspense fallback={<ReviewsSkeleton />}>
          <Reviews restaurantId={restaurant.id} />
        </Suspense>
        <section>
          <ReservationForm restaurantId={String(restaurant.id)} />
        </section>
      </main>
    );
}