import {ScrollView} from "react-native";
import {Category} from "../category/category.component";
import {useCategories} from "../../controllers/useCategories";
import {priceCategoriesStyles} from "./PriceCategories.styles";

export const PriceCategories = () => {
  const {priceCategories} = useCategories()
  const {containerStyles} = priceCategoriesStyles;
  return (
    <ScrollView style={containerStyles}>
      {priceCategories.map(category => {
        return <Category key={category.title} horizontalScroll={true} title={category.title}
                         restaurants={category.restaurants}/>
      })}
    </ScrollView>
  )
}
