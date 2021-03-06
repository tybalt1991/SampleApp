/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-25 15:50:23 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-26 16:41:02
 */
import React from 'react';
import { View, Image, Text,Platform} from 'react-native';
import {scaleSize} from '../utils/AdapterUtil';

const navHeight = Platform.select({
  ios: 30,
  android: 40,
});
  
const SearchNav = ({
}) => (
<View style={{marginLeft: scaleSize(15),}}>
  <View 
    style={{ 
        height: navHeight, 
        backgroundColor: "#E6E6E6", 
        borderRadius: 5, 
        paddingLeft: scaleSize(5), 
        flexDirection: 'row', 
        alignItems: 'center',
    }} 
  >
    <Image 
      source={require('../images/common/search_icon.png')} 
      style={{ width: 15, height: 15 }}
    >
    </Image>
    <Text style={{ marginLeft: scaleSize(6), width: scaleSize(180),  fontSize: scaleSize(16)}}>输入商品名称 编码
    </Text>
  </View>
</View>
);
  
export default SearchNav;