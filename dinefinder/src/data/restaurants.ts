import { Restaurant } from "@/types/restaurantsty";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "La Piazza",
    cuisine: "Italian",
    location: "Jeddah",
    rating: 4.7,
    description:
      "A cozy Italian restaurant serving traditional pasta, pizza, and fresh salads.",
    image: "/restaurants/la-piazza.jpg",
  },
  {
    id: 2,
    name: "Sakura House",
    cuisine: "Japanese",
    location: "Jeddah",
    rating: 4.8,
    description:
      "A Japanese restaurant specializing in sushi, ramen, and traditional dishes.",
    image: "/restaurants/sakura-house.jpg",
  },
  {
    id: 3,
    name: "The Grill",
    cuisine: "Steakhouse",
    location: "Jeddah",
    rating: 4.6,
    description:
      "A modern steakhouse offering grilled meats, burgers, and premium sides.",
    image: "/restaurants/the-grill.jpg",
  },
];
