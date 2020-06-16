import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../screens/Home/HomeScreen';

const HomeStack = createStackNavigator();

const Homestack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      headerMode="none"
      screenOptions={{
        headerTintColor: 'white',
        headerTitleAlign: '',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default Homestack;
