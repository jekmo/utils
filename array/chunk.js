/*
 * @jekmo
 */

/* 分隔数组成块，取模为0的肯定是新增的chunk,非0就是要加到最后一个chunk里面 */
function chunk(array, size = 1) {
  return array.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]]
  }, [])
}

console.log(chunk([1,2,3,4,5,6,7,8], 7))
