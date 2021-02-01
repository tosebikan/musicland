import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

// screens

import {Home, ItemDetails} from './src/screens/';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="ItemDetails" component={ItemDetails} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
