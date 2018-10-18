/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-15 15:20:07 
 * @Last Modified by:   tybalt.Huang 
 * @Last Modified time: 2018-10-15 15:20:07 
 */
export const formatDateString = (timestamp) => {
    if (timestamp === undefined) {
      return '';
    }
    const date = new Date(parseInt(timestamp) * 1000);
    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  
  export const formatStringWithHtml = (originString) => {
    if (originString === undefined) {
      return '';
    }
    const newString = originString
      .replace(/&nbsp;/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    return newString;
  };