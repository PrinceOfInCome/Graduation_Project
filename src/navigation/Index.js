import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from '../navigation/StackNavigator/AuthStack/AppStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppContainer;
