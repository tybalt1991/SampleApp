/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 15:18:32 
 * @Last Modified by:   tybalt.Huang 
 * @Last Modified time: 2018-10-15 15:18:32 
 */
import { Alert, ToastAndroid, Platform } from 'react-native';

const showShort = (content, isAlert) => {
  if (!content) {
    return;
  }
  if (isAlert || Platform.OS === 'ios') {
    Alert.alert('提示', content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.SHORT);
  }
};

const showLong = (content, isAlert) => {
  if (isAlert || Platform.OS === 'ios') {
    Alert.alert('提示', content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.LONG);
  }
};

export default {
  showShort,
  showLong
};