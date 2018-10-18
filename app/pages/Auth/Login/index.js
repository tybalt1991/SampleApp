/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 09:38:57 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-17 18:31:43
 */
import React from 'react';
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import storage from '../../../utils/StorageUtil'


const propTypes = {
  authActions: PropTypes.object,
  auth: PropTypes.object.isRequired
};

class Login extends React.Component {
  static navigationOptions = {
    headerTitle: '登录',
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      storageToken: ''
    };
  }
  //组件未加载
  componentWillMount() {
    console.log('login-did-mount');
    storage.load({ key: 'token'}).then(res => {
      this.setState({storageToken: res.token});
    }).catch(err => {
      console.log(err);
      this.setState({storageToken: 'no storage'});
    });
  }
  //组件已加载
  componentDidMount() {
    
  }
  //密码登录
  loginByPSW() {
    const { authActions } = this.props;
    authActions.requestLoginByPSW(this.state.username, this.state.password);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Login Page!</Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} placeholder="请输入手机号" 
          maxLength={11}
        />
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} placeholder="请输入密码" 
          secureTextEntry={true}
        />
        <Button title="login" onPress={()=>this.loginByPSW()}></Button>
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