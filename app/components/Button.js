/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 13:59:20 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-24 17:12:05
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text, TouchableOpacity } from 'react-native';

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  containerStyle: ViewPropTypes.style,
  text: PropTypes.string,
  activeOpacity: PropTypes.number
};

const Button = ({
  onPress,
  disabled,
  style,
  containerStyle,
  text,
  activeOpacity
}) => (
  <TouchableOpacity
    style={containerStyle}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
  >
    <Text style={style}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = propTypes;

Button.defaultProps = {
  onPress() {},
  containerStyle: {
    height: 40,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  style:  {
    textAlign: 'center',
    color: 'white',
  },
  disabled: false,
  activeOpacity: 0.8
};

export default Button;