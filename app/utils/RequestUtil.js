/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 15:33:36 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-23 17:59:45
 */
import querystring from 'querystring'
const request = (url, method, data) => {
  let isOk;
  let bodyData;
  if (method == 'get') {
    url = url + '?' + querystring.stringify(data);
  } else {
    bodyData = querystring.stringify(data)
  }
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyData
    })
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData)
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        console.log(error)
        reject(error);
      });
  });
};

export default {
  request
};