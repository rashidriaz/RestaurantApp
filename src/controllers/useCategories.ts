import {useRestaurants} from "./useRestaurants";
import {RestaurantCategory} from "../models/RestaurantCategory";
import {createSingletonHook} from "../utils/createSingletonHook";
import {useState, useEffect} from "react";

type PriceCategory = {
  filter: string,
  title: string,
}
const useCategoriesController = () => {
  const [restaurantCategoriesByPrice, setRestaurantCategoriesByPrice] = useState<RestaurantCategory[]>([]);
  const {filterByPrice, restaurants} = useRestaurants();
  const priceCategories: PriceCategory[] = [
    {filter: '$', title: "Cost Effective"},
    {filter: '$$', title: "Bit Pricer"},
    {filter: '$$$', title: "Big Spender"},
    {filter: '$$$$', title: "Elite"}];
  useEffect(() => {
    const restaurantCat = priceCategories.map<RestaurantCategory>(category => {
      return {
        title: category.title,
        restaurants: filterByPrice(category.filter)
      }
    });
    setRestaurantCategoriesByPrice(restaurantCat);
  }, [restaurants]);


  return {
    priceCategories: restaurantCategoriesByPrice
  }
}

const [useCategories, CategoriesProvider] = createSingletonHook(useCategoriesController);

export {CategoriesProvider, useCategories};
