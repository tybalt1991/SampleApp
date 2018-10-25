/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 09:38:57 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-25 15:23:28
 */
import React from 'react';
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, TextInput,} from 'react-native';
import storage from '../../../utils/StorageUtil';
import { NavigationActions } from 'react-navigation';
import Button from '../../../components/Button';
import MyTitle from '../../../components/MyTitle';

const propTypes = {
  authActions: PropTypes.object,
  auth: PropTypes.object.isRequired
};

class Login extends React.Component {

  static navigationOptions = {
    headerTitle: (<MyTitle text='登录' />),
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userinfo: {}
    };
  }
  //组件未加载
  componentWillMount() {
    storage.load({ key: 'userinfo'}).then(res => {
      console.log(res);
      if (res.userinfo) {
        this.setState({userinfo: res.userinfo});
      }
    }).catch(err => {
      console.log(err);
    });
  }
  //组件已加载
  componentDidMount() {
    
  }
  //密码登录
  loginByPSW() {
    const { authActions} = this.props;
    authActions.requestLoginByPSW(this.state.username, this.state.password);
    NavigationActions.navigate('User');
  }
  render() {
    const { auth } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Login Page!</Text>
        <TextInput
          style={{height: 40, width: 200}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} placeholder="请输入手机号" 
          maxLength={11}
        />
        <TextInput
          style={{height: 40, width: 200}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} placeholder="请输入密码" 
          secureTextEntry={true}
        />
        <Button
          onPress={()=>this.loginByPSW()}
          text="登录"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Login.propTypes = propTypes;
export default Login;