/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 15:11:29 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-15 17:07:13
 */

import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

