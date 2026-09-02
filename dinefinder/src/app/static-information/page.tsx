
export const dynamic = "force-static";


export default function StaticInformationPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        About DineFinder
      </h1>

      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Our Mission
          </h2>

          <p className="mt-2 text-gray-600">
            DineFinder helps people discover restaurants
            and find the perfect place for their next meal.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            How It Works
          </h2>

          <p className="mt-2 text-gray-600">
            Users can browse restaurants, explore cuisines,
            view restaurant details, and find places that
            match their preferences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Contact
          </h2>

          <p className="mt-2 text-gray-600">
            Contact us at info@dinefinder.com
          </p>
        </div>
      </section>
    </main>
  );
}