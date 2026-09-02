//We need a fallback component.

export default function ReviewsSkeleton() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">Reviews</h2>

      <div className="mt-6 space-y-4">
        <div className="animate-pulse rounded-lg border p-4">
          <div className="h-5 w-32 rounded bg-gray-200" />

          <div className="mt-4 h-4 w-full rounded bg-gray-200" />

          <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />
        </div>

        <div className="animate-pulse rounded-lg border p-4">
          <div className="h-5 w-32 rounded bg-gray-200" />

          <div className="mt-4 h-4 w-full rounded bg-gray-200" />

          <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
