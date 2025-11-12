import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Screen1} name="Screen1"/>
        <Stack.Screen component={Screen2} name="Screen2"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
