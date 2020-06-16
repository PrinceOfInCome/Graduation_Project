import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../../screens/SplashScreen';
import BottomTap from '../../TapNavigator/BottomTap';
const AppStack = createStackNavigator();

const App = () => {
  return (
    <AppStack.Navigator
      initialRouteName="SplashScreen"
      headerMode="none"
      screenOptions={{
        headerTintColor: 'white',
        headerTitleAlign: '',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <AppStack.Screen name="SplashScreen" component={SplashScreen} />
      <AppStack.Screen name="BottomTap" component={BottomTap} />
    </AppStack.Navigator>
  );
};

export default App;
