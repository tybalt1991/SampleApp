/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-17 10:11:15 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-17 10:12:46
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../pages/Auth/Login';
import * as authCreators from '../actions/auth';

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth
  };
};

const mapDispatchToProps = (dispatch) => {
  const authActions = bindActionCreators(authCreators, dispatch);
  return {
    authActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
