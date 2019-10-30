/*
 * FileName: compact.js
 * @Author: jekmo
 * @Date: 10/30/19 10:56 PM
 */

function compact(arr) {
  return arr.filter(o => o)
}

console.log(compact([1, 0, '', false, true, {}]))

