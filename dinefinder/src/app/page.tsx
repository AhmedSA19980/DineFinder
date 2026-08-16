import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-6xl px-6 py-20">
        <section className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight">
            Discover your next favorite restaurant.
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Explore restaurants, discover new cuisines, and find the perfect
            place for your next meal.
          </p>

          <Link
            href="/restaurants"
            className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white"
          >
            Explore Restaurants
          </Link>
        </section>
      </main>
    </div>
  );
}
