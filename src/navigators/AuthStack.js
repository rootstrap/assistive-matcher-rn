import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { login, signUp } from './../constants/screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={login} component={null} />
    <Stack.Screen name={signUp} component={null} />
  </Stack.Navigator>
);

export default AuthStack;