/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 09:31:54 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-25 15:21:00
 */
import React from 'react';
import {Image, TouchableOpacity, View, Text,} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
//component
import LoginContainer from './LoginContainer';
import Button from '../components/Button';
import MyTitle from '../components/MyTitle';
//page
import MainPage from '../pages/Main';
import CategoryPage from '../pages/Category';
import SpacePage from '../pages/Space';
import WholehousePage from '../pages/Wholehouse';
import UserPage from '../pages/User';
import CartPage from '../pages/Cart';



const TabContainer = createBottomTabNavigator(
  {
    Main: {
      screen: MainPage,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_01.png')} style={{ width: 25, height: 25 }} />
            : <Image source={require('../images/tab-icon/foot_02.png')} style={{ width: 25, height: 25 }} />
        ),
      }
    },
    Category: {
      screen: CategoryPage,
      navigationOptions: {
        tabBarLabel: '分类',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_04.png')} style={{ width: 25, height: 25 }} />
            : <Image source={require('../images/tab-icon/foot_03.png')} style={{ width: 25, height: 25 }} />
        )
      }
    },
    Space: {
      screen: SpacePage,
      navigationOptions: {
        tabBarLabel: '空间方案',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_06.png')} style={{ width: 25, height: 25 }} />
            : <Image source={require('../images/tab-icon/foot_05.png')} style={{ width: 25, height: 25 }} />
        )
      }
    },
    Wholehouse: {
      screen: WholehousePage,
      navigationOptions: {
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
      tabStyle: {
        padding: 0
      }
    }
  }
);


TabContainer.navigationOptions = ({ navigation }) => {
  const { routes, index } = navigation.state;
  const navigationOptions = {};
  
 // here's an example, but you can dynamically define title 
 // however you like given `routes` & `index`
  
  if (routes[index].routeName === 'Main' || routes[index].routeName === 'Category') {
    navigationOptions.headerTitle = (
      <MyTitle text='共享宝'/>
    );
    navigationOptions.headerLeft = (<View/>);
    navigationOptions.headerRight = (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            style={{width:40,height:40,}}
            source={require('../images/common/cart_icon.png')}
          />
        </TouchableOpacity>
        <Text style={{width:40,height:40,}}>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Image
            style={{width:40,height:40, marginRight: 20,}}
            source={require('../images/common/admin_icon.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
  if (routes[index].routeName === 'Space') {
    navigationOptions.headerTitle = (
      <MyTitle text='空间方案'/>
    );
    navigationOptions.headerRight = (<View/>);
    navigationOptions.headerLeft = (<View/>);
  }
  if (routes[index].routeName === 'Wholehouse') {
    navigationOptions.headerTitle = (
      <MyTitle text='整装方案'/>
    );
    navigationOptions.headerRight = (<View/>);
    navigationOptions.headerLeft = (<View/>);
  }
  
  return navigationOptions;
}

const Container = createStackNavigator(
  {
    Home: {
      screen: TabContainer,
    },
    User: {
      screen: UserPage,
    },
    Login: {
      screen: LoginContainer,
    },
    Cart: {
      screen: CartPage,
    },
  },
  {
    mode: 'card',
    headerMode: 'screen',
  }
);
export default Container;