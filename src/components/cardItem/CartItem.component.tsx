import {Restaurant} from "../../models/restaurant";
import {View, Image, Text} from "react-native";
import {cardItemStyles} from "./CartItem.styles";

export type CartItemProps = {
  restaurant:Restaurant
}
export const CardItem = ({restaurant}:CartItemProps) => {
  const {imageUrl, name, reviewCount, rating,} = restaurant;
  const {containerStyles, imageStyles, titleStyles, detailSectionStyles, captionStyles} = cardItemStyles
  return (
    <View style={containerStyles}>
      <Image style={imageStyles} source={{uri: imageUrl}}/>
      <View style={detailSectionStyles}>
        <Text style={titleStyles}>{name}</Text>
        <Text style={captionStyles}>{rating} Stars, {reviewCount} Reviews</Text>
      </View>
    </View>
  )
}
