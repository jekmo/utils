/*
 * FileName: flatMap.js
 * @Author: jekmo
 * @Date: 11/5/19 10:48 PM
 */

function flatMap(arr) {
  return Array.isArray(arr)
    ? arr.reduce((flatArr, o) => Array.isArray(o) ? flatArr.concat(flatMap(o)) : flatArr.concat(o), [])
    : [arr]
}

console.log(flatMap([1,2,[1,43,555,33, [1,4,5,6, [232, 33], [2 ,3,4]]]]))
