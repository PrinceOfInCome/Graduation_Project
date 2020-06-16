import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/SplashScreen';

const AppStack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="splash"
        headerMode="none"
        screenOptions={{
          headerTintColor: 'white',
          headerTitleAlign: '',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <AppStack.Screen name="splash" component={SplashScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
