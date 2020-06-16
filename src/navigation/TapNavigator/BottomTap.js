import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homestack from '../StackNavigator/HomeStack/HomeStack';
import MapScreen from '../../screens/Map/MapScreen';
const BottomStack = createBottomTabNavigator();

const BottomTap = () => {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name="HomeStack" component={Homestack} />
      <BottomStack.Screen name="MapScreen" component={MapScreen} />
    </BottomStack.Navigator>
  );
};

export default BottomTap;
