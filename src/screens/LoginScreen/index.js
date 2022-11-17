

import React from 'react';
import { Text, View } from 'react-native';
import { object } from 'prop-types';

const LoginScreen = () => {

  return (
    <View style={{}}>
      <Text style={{}}>Login Page</Text>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default LoginScreen;