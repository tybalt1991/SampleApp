/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-25 15:50:23 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-25 17:43:31
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, } from 'react-native';

  
const SearchNav = ({
}) => (
<View style={{ paddingRight: 15, paddingLeft: 15, marginTop: 10 }}>
  <View 
    style={{ 
        height: 40, 
        backgroundColor: "#E6E6E6", 
        borderRadius: 10, 
        paddingLeft: 25, 
        flexDirection: 'row', 
        alignItems: 'center',
    }} 
  >
    <Image 
      source={require('../images/common/search_icon.png')} 
      style={{ width: 15, height: 15 }}
    >
    </Image>
    <Text style={{ marginLeft: 10, width: 200 }}>输入商品名称 编码
    </Text>
  </View>
</View>
);
  
export default SearchNav;