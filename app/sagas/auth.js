/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 16:40:40 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-23 18:19:27
 */

import { put, take, call, fork } from 'redux-saga/effects';
import ToastUtil from '../utils/ToastUtil';
import RequestUtil from '../utils/RequestUtil';
import * as types from '../constants/ActionTypes';
import {fetchLoginByPSW, receiveLoginByPSW} from '../actions/auth';
import * as Api from '../config/Api';
import storage from '../utils/StorageUtil'

export function* requestLoginByPSW(username, password) {
  try {
    yield put(fetchLoginByPSW(username, password));
    const res = yield call(
      RequestUtil.request,
      Api.LOGIN_BY_PSW,
      'post',
      {username: username, password: password}
    );
    if (res.s == 1) {
      yield put(receiveLoginByPSW(res.d.seller, res.d.token));
      storage.save({ key: 'userinfo', data: {userinfo:res.d.seller}, expires:  30 * 86400 * 1000}); 
      storage.save({ key: 'token', data: {token:res.d.token}, expires:  30 * 86400 * 1000});
      ToastUtil.showShort('登录成功');
      
    } else {
      yield put(receiveLoginByPSW({}, ''));
      ToastUtil.showShort(res.m);
    }
  } catch (error) {
    console.log(error);
    yield put(receiveLoginByPSW({}, ''));
    ToastUtil.showShort('服务器错误');
  }
}

export function* watchRequestLoginByPSW() {
    while (true) {
        const { username, password } = yield take(types.REQUEST_LOGIN_BY_PSW);
        yield fork(requestLoginByPSW, username, password);
    }
}