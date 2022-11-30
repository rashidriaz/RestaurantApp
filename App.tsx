import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BusinessSearchScreen, headerOptions} from "./src/pages/HomeScreen/BusinessSearchScreen.Page";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="businessSearch" component={BusinessSearchScreen} options={headerOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
