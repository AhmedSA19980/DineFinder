export default function Loading() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="animate-pulse">
        <div className="h-4 w-32 rounded bg-gray-200" />

        <div className="mt-8 h-10 w-72 rounded bg-gray-200" />

        <div className="mt-4 h-6 w-40 rounded bg-gray-200" />

        <div className="mt-4 h-6 w-52 rounded bg-gray-200" />

        <div className="mt-8 h-20 w-full rounded bg-gray-200" />
      </div>
    </main>
  );
}
