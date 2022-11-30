import {View, Text, FlatList} from "react-native";
import {Restaurant} from "../../models/restaurant";
import {CardItem} from "../cardItem/CartItem.component";
import {categoryStyles} from "./categopry.styles";

export type CategoryProps = {
  horizontalScroll: boolean,
  title: string,
  restaurants: Restaurant[],
}
export const Category = ({horizontalScroll, title, restaurants}: CategoryProps) => {
  const {containerStyles, titleStyles} = categoryStyles;
  return restaurants.length > 0 ? (
    <View style={containerStyles}>
      <Text style={titleStyles}>{title}</Text>
      <FlatList showsHorizontalScrollIndicator={false} horizontal={horizontalScroll} data={restaurants}
                keyExtractor={o => o.id}
                renderItem={({item}) => (<CardItem restaurant={item}/>)}/>
    </View>
  ) : <View></View>;
}
