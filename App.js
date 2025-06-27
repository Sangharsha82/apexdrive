import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/home";
import About from "./screen/about";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="about" component={About} options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  
