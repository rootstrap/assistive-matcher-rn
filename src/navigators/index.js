import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import useSession from 'hooks/useSession';
import { STACKS } from './../constants/screens';

import AppStack from './AppStack';
// import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  // const { user, info } = useSession();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* {user && info ? ( */}
        <Stack.Screen name={STACKS.app} component={AppStack} />
        {/* // ) : (
        //     <Stack.Screen name={STACKS.auth} component={AuthStack} />
        //   )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;