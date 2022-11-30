import {Dimensions, StyleSheet} from "react-native";
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width/3 < 200? 200: dimensions.width/3 > 400? 400: dimensions.width/3;
const imageHeight = imageWidth/2;
export const cardItemStyles = StyleSheet.create({
  containerStyles: {
    width: imageWidth,
    marginVertical: 10,
    marginRight: 20,
    borderStyle: "solid",
    borderColor: "#d3d4d5",
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {width:1, height:1},
  },
  imageStyles: {
    height: imageHeight,
    width: imageWidth,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailSectionStyles:{
    marginHorizontal: 10,
    marginTop: 15
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  captionStyles:{
    color: "#a6a6a6",
  }
})
