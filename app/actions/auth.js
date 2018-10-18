/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 16:15:46 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-16 16:57:20
 */

import * as types from '../constants/ActionTypes';

export function requestLoginByPSW(username, password) {
  return {
    type: types.REQUEST_LOGIN_BY_PSW,
    username, 
    password
  };
}

export function fetchLoginByPSW() {
  return {
    type: types.FETCH_LOGIN_BY_PSW,
  };
}

export function receiveLoginByPSW(user, token) {
  return {
    type: types.RECEIVE_LOGIN_BY_PSW,
    user, 
    token
  };
}