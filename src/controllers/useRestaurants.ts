import {yelpServices} from "../services/yelp.service";
import {Restaurant} from "../models/restaurant";
import {createSingletonHook} from "../utils/createSingletonHook";
import {useEffect, useState} from "react";

const useRestaurantsController = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const {getBusinesses} = yelpServices();

  const fetchRestaurants = async () => {
    const data = await getBusinesses("");
    return data.map((
      obj: { id: string; name: string; image_url: string; price: string; rating: number; review_count: number; }) => {
      return {
        id: obj.id,
        name: obj.name,
        imageUrl: obj.image_url,
        price: obj.price,
        rating: obj.rating,
        reviewCount: obj.review_count,
      }
    });
  }

  useEffect(() => {
    fetchRestaurants().then(setRestaurants).catch(_ => {
      console.log(_);
    });
  }, [])

  const filterByPrice = (price: string): Restaurant[] => {
    return restaurants.filter(o => o.price === price);
  }
  const searchByTitle = (title: string): Restaurant[] => {
    return restaurants.filter(o => o.name.includes(title));
  }
  return {
    restaurants,
    filterByPrice,
    searchByTitle
  }
}
const [useRestaurants, RestaurantsProvider] = createSingletonHook(useRestaurantsController);

export {RestaurantsProvider, useRestaurants};

