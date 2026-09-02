import { Review } from "@/types/Reviews";
import { ReviewsProps } from "@/types/ReviewsProps";



async function getReviews(restaurantId: number): Promise<Review[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      author: "Ahmed",
      rating: 5,
      comment: "Great restaurant!",
    },
    {
      id: 2,
      author: "Sarah",
      rating: 4,
      comment: "Excellent food and atmosphere.",
    },
    {
      id: 3,
      author: "Omar",
      rating: 5,
      comment: "Would definitely come again.",
    },
  ];
}



export default async function Reviews({
    restaurantId,
}: ReviewsProps){

      const reviews = await getReviews(restaurantId);

      return (
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Reviews</h2>

          <div className="mt-6 space-y-4">
            {reviews.map((review) => (
              <article key={review.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{review.author}</h3>

                  <span>{"⭐".repeat(review.rating)}</span>
                </div>

                <p className="mt-2 text-gray-600">{review.comment}</p>
              </article>
            ))}
          </div>
        </section>
      );
}