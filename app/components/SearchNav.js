/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-25 15:50:23 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-26 16:04:16
 */
import React from 'react';
import { View, Image, Text, } from 'react-native';
import {scaleSize, scaleHeight} from '../utils/AdapterUtil';

  
const SearchNav = ({
}) => (
<View style={{marginLeft: scaleSize(15),}}>
  <View 
    style={{ 
        height: 40, 
        backgroundColor: "#E6E6E6", 
        borderRadius: 5, 
        paddingLeft: scaleSize(5), 
        flexDirection: 'row', 
        alignItems: 'center',
    }} 
  >
    <Image 
      source={require('../images/common/search_icon.png')} 
      style={{ width: scaleSize(15), height: scaleSize(15) }}
    >
    </Image>
    <Text style={{ marginLeft: scaleSize(6), width: scaleSize(150) }}>输入商品名称 编码
    </Text>
  </View>
</View>
);
  
export default SearchNav;