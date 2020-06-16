import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/stores/Index';
import AppContainer from './src/navigation/Index';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
};

export default App;
