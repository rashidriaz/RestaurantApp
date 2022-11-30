import {StyleSheet} from "react-native";


export const SearchBarStyles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  SearchField: {
    height: 50,
    borderStyle: "solid",
    borderColor: "#cdcecf",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 45,
    marginHorizontal: 5,
    marginVertical: 20,
    width: "98%",
    backgroundColor: "#efeff1",
    fontSize: 20
  },
  SearchIcon: {
    position: "absolute",
    left: 12,
    top: 30,
    display: "flex",
    fontSize: 30,
  }
});
