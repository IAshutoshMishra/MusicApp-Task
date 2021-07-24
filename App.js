import React, {useState, useEffect} from "react";
import {View,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src'
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import configureStore from "model/store";
import {Provider} from "react-redux";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

    return(  
      <SafeAreaProvider>
        <Provider store={configureStore()}>
          <NavigationContainer >
            <MainNavigator />
          </NavigationContainer>
        </Provider>
    </SafeAreaProvider>
    )
}
export default App;