/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 16:29:42 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-17 15:08:32
 */
import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware, { END } from "redux-saga"

import rootReducer from "../reducers"
const { logger } = require('redux-logger');

const middlewares = [];

// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
/* global __DEV__  */
if (__DEV__) {
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  // install saga run
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  
  return store;
}