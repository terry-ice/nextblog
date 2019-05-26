/*
 * @Author: terry
 * @Date: 2019-05-25 22:12:54
 * @Last Modified by:   https://github.com/terry-ice
 * @Last Modified time: 2019-05-25 22:12:54
 */

/**
 * Returns the parameter value, from the url, by name
 * @param {string} name Parameter name
 * @param {string} url The url
 * @returns {string} The value of this parameter
 */
export const getParameterByName = (name: string, url: string) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
