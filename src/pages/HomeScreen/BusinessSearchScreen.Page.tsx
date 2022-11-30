import {View} from "react-native";
import {useState} from "react";
import {SearchBar} from "../../components/SearchBar/SearchBar.component";
import {yelpServices} from "../../services/yelp.service";
import {RestaurantsProvider} from "../../controllers/useRestaurants";
import {CategoriesProvider} from "../../controllers/useCategories";
import {PriceCategories} from "../../components/priceCategories/PriceCategories.component";
import {BusinessSearchScreenStyles} from "./BusinessSearchScreen.styles";

export const headerOptions = {
  title: "Business Search",
  headerStyle: {
    backgroundColor: "#efeff1",
    textAlign: "middle",
  },
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
    textAlign: "center",
  }
}
export const BusinessSearchScreen = () => {

  const {getBusinesses} = yelpServices();

  const [query, setQuery] = useState('');
  const onChange = async () => {
    const res = await getBusinesses("random shit");
    console.log(res);
  }
  return (<View style={BusinessSearchScreenStyles.container}>
    <RestaurantsProvider>
    <SearchBar onChange={onChange} defaultValue={query} placeholder="Search"/>
    <CategoriesProvider>
      <PriceCategories />
    </CategoriesProvider>

    </RestaurantsProvider>
  </View>)
}
