import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SCREENS from './../constants/screens';
import MainScreen from './../screens/MainScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator initialRouteName={SCREENS.home}>
    <Stack.Screen name={SCREENS.home} component={MainScreen} />
  </Stack.Navigator>
);

export default AppStack;