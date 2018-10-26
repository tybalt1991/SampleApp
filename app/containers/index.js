/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 09:31:54 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-26 15:51:30
 */
import React from 'react';
import {Image, TouchableOpacity, View, Text,} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

//container 涉及状态保存的页面
import LoginContainer from './LoginContainer';
//component
import MyTitle from '../components/MyTitle';
import SearchNav from '../components/SearchNav';
//util
import {scaleSize} from '../utils/AdapterUtil'
//page
import MainPage from '../pages/Main';
import CategoryPage from '../pages/Category';
import SpacePage from '../pages/Space';
import WholehousePage from '../pages/Wholehouse';
import UserPage from '../pages/User';
import CartPage from '../pages/Cart';
import SearchPage from '../pages/Search';

//底部tab栏图片大小
const tabBarImgStyle = {width: 20, height: 20};

const TabContainer = createBottomTabNavigator(
  {
    Main: {
      screen: MainPage,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_01.png')} style={tabBarImgStyle} />
            : <Image source={require('../images/tab-icon/foot_02.png')} style={tabBarImgStyle} />
        ),
      }
    },
    Category: {
      screen: CategoryPage,
      navigationOptions: {
        tabBarLabel: '分类',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_04.png')} style={tabBarImgStyle} />
            : <Image source={require('../images/tab-icon/foot_03.png')} style={tabBarImgStyle} />
        )
      }
    },
    Space: {
      screen: SpacePage,
      navigationOptions: {
        tabBarLabel: '空间方案',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_06.png')} style={tabBarImgStyle} />
            : <Image source={require('../images/tab-icon/foot_05.png')} style={tabBarImgStyle} />
        )
      }
    },
    Wholehouse: {
      screen: WholehousePage,
      navigationOptions: {
        tabBarLabel: '整装方案',
        tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../images/tab-icon/foot_08.png')} style={tabBarImgStyle} />
            : <Image source={require('../images/tab-icon/foot_07.png')} style={tabBarImgStyle} />
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
    navigationOptions.headerLeft = (
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <SearchNav />
      </TouchableOpacity>
    );
    navigationOptions.headerRight = (
      <View style={{flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            style={{width:20,height:20,}}
            source={require('../images/common/cart_icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Image
            style={{width:20,height:20, marginRight: scaleSize(10), marginLeft: scaleSize(20)}}
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
  }
  if (routes[index].routeName === 'Wholehouse') {
    navigationOptions.headerTitle = (
      <MyTitle text='整装方案'/>
    );
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
    Search: {
      screen: SearchPage,
    },
  },
  {
    mode: 'card',
    headerMode: 'screen',
    headerLayoutPreset: "center",
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
      },
    },
  }
);
export default Container;