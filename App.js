import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
return (
  <Stack.Navigator screenOptions={{headerTitle: 'Note App'}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Create" component={CreateScreen} />
  </Stack.Navigator>
);
}
export default function App() {


  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
