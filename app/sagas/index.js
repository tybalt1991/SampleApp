/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 16:39:36 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-16 18:24:31
 */


import { all, fork } from 'redux-saga/effects';

import { watchRequestLoginByPSW } from './auth';

export default function* rootSaga() {
  yield all([fork(watchRequestLoginByPSW)]);
}