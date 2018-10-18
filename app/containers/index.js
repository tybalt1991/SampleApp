/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 09:31:54 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-17 17:47:18
 */
import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import Main from '../pages/Main'
import Category from '../pages/Category'
import Space from '../pages/Space'
import Wholehouse from '../pages/Wholehouse'
import User from '../pages/User'
import LoginContainer from './LoginContainer';


const TabContainer = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: '首页',
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_01.png')} style={{ width: 25, height: 25 }} />
            : <Image source={require('../images/tab-icon/foot_02.png')} style={{ width: 25, height: 25 }} />
        )
      }
    },
    Category: {
      screen: Category,
      navigationOptions: {
        title: '分类',
        tabBarLabel: '分类',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_04.png')} style={{ width: 25, height: 25 }} />
            : <Image source={require('../images/tab-icon/foot_03.png')} style={{ width: 25, height: 25 }} />
        )
      }
    },
    Space: {
      screen: Space,
      navigationOptions: {
        title: '空间方案',
        tabBarLabel: '空间方案',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_06.png')} style={{ width: 25, height: 25 }} />
            : <Image source={require('../images/tab-icon/foot_05.png')} style={{ width: 25, height: 25 }} />
        )
      }
    },
    Wholehouse: {
      screen: Wholehouse,
      navigationOptions: {
        title: '整装方案',
        tabBarLabel: '整装方案',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_08.png')} style={{ width: 25, height: 25 }} />
            : <Image source={require('../images/tab-icon/foot_07.png')} style={{ width: 25, height: 25 }} />
        )
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FF8C00',
      inactiveTintColor: '#999999',
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: '#fff'
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const Container = createStackNavigator(
  {
    Home: {
      screen: TabContainer,
    },
    User: {
      screen: User,
    },
    Login: {
      screen: LoginContainer
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FF8C00',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#000000'
    },
  }
);
export default Container;