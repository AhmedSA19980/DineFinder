import { restaurants } from "@/data/restaurants";



export async function GET():Promise<Response>{

     await new Promise<void>((resolve) => setTimeout(resolve , 1000)) 
     return Response.json(restaurants);
}