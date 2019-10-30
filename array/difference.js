/*
 * FileName: difference.js
 * @Author: jekmo
 * @Date: 10/30/19 11:07 PM
 */
function difference(arr, excludeArr) {
  return arr.filter(o => excludeArr.indexOf(o) === -1)
}

console.log(difference([1, 3,2,45,22,1,3, 5,6,67,7], [1,3,4,5]))
