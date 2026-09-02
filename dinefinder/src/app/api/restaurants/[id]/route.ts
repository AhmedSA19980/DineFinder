import { restaurants } from "@/data/restaurants";
import { getRestaurant } from "@/service/restaurant.service";
import { RouteProps } from "@/types/routeprops";






export async function GET(
    request:Request,
    {params}:RouteProps
):Promise<Response>{

    const {id} = await params ;
    const restaurant = await getRestaurant(Number(id))

    if(!restaurant){
        return Response.json(
      {
        message: "Restaurant not found",
      },
      {
        status: 404,
      }
    );
    }
     return Response.json(restaurant);
}