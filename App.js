/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 15:11:26 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-18 15:25:26
 */


import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/configure-store';
import rootSaga from './app/sagas/index';
import Container from './app/containers';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);

const store = configureStore();

// run root saga
store.runSaga(rootSaga);

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
