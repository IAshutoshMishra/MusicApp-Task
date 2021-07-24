import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "containers";
import Details from "containers/Details"

export default function MainNavigator({navigation}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: "SONGS", headerShown: true, headerStyle: { backgroundColor: '#f6f6f6'}, headerTitleStyle: { textAlign: 'center', fontSize: 16 },}}
        screenOptions={{  }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: "SONGS DETAILS", headerShown: true, headerStyle: { backgroundColor: '#f6f6f6'}, headerTitleStyle: { fontSize: 16 },}}
        screenOptions={{  }}
      />
    </Stack.Navigator>
  );
}
