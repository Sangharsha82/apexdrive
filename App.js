import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/home";
import About from "./screen/Cart";
import Cart from "./screen/Cart";
import Ferrari from "./screen/Ferrari";
import Porsche from "./screen/Porsche";
import Audi from "./screen/Audi";
import BMW from "./screen/BMW";
import Honda from "./screen/Honda";
import Toyota from "./screen/Toyota";
import Mercedes from "./screen/Mercedes";
import Lamborghini from "./screen/Lamborghini";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cart" component={Cart} />

        <Stack.Screen name="Ferrari" component={Ferrari} />
        <Stack.Screen name="Porsche" component={Porsche} />
        <Stack.Screen name="Audi" component={Audi} />
        <Stack.Screen name="BMW" component={BMW} />
        <Stack.Screen name="Honda" component={Honda} />
        <Stack.Screen name="Toyota" component={Toyota} />
        <Stack.Screen name="Mercedes" component={Mercedes} />
        <Stack.Screen name="Lamborghini" component={Lamborghini} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
