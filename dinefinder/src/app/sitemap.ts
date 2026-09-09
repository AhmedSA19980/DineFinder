import type { MetadataRoute } from "next";
import { getRestaurants } from "@/service/restaurants.service";

const baseUrl = "https://dinefinder.example";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const restaurants = await getRestaurants();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/restaurants`,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const restaurantRoutes: MetadataRoute.Sitemap = restaurants!.map(
    (restaurant) => ({
      url: `${baseUrl}/restaurants/${restaurant.id}`,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...restaurantRoutes];
}
