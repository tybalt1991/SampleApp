/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-25 14:43:35 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-25 14:57:47
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

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
        fontWeight: 'bold', 
        fontSize: 24, 
        color: 'black',
    },
  };
  
  export default MyTitle;