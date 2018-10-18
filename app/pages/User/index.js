/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 09:38:57 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-16 09:56:56
 */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  //组件未加载
  componentWillMount() {

  }
  //组件已加载
  componentDidMount() {
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to User!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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

export default User;