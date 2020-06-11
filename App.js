import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/index';
import AppContainer from './src/navigator/index';
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
