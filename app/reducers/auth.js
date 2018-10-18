/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 16:20:47 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-17 13:41:01
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    loading: false,
    user: {},
    token: ''
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LOGIN_BY_PSW:
      return Object.assign({}, state, {
        loading: true
      }); 
    case types.RECEIVE_LOGIN_BY_PSW:
      return Object.assign({}, state, {
        loading: false,
        user: action.user,
        token: action.token
      }); 
    default:
      return state;
    }
}