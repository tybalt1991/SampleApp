/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-25 14:43:35 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-26 15:52:45
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {scaleSize} from '../utils/AdapterUtil'

const propTypes = {
    text: PropTypes.string,
    style: Text.propTypes.style,
  };
  
  const MyTitle = ({
    text,
    style,
  }) => (
      <Text style={style}>{text}</Text>
  );
  
  MyTitle.propTypes = propTypes;
  
  MyTitle.defaultProps = {
    style:  {
        flex: 1, 
        textAlign: 'center',  
        fontSize: scaleSize(20), 
        color: 'black',
    },
  };
  
  export default MyTitle;