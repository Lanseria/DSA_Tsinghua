let VARR = [11, 23, 19, 7, 17, 5, 3, 13, 2, 29]
function bubbleSort (V, lo, hi) {
  const v = V.slice()
  while (!bubble(v, lo, hi--));
  return v
  function bubble (V, lo ,hi) {
    sorted = true;
    while(++lo < hi) {
      if (V[lo-1] > V[lo]) {
        sorted = false;
        swap(lo-1, lo);
      }
    }
    return sorted;
    function swap (f, s) {
      let temp = V[f]
      V[f] = V[s]
      V[s] = temp
    }
  }
}
function bubbleSort1 (V, lo, hi) {
  const v = V.slice()
  while (lo < (hi = bubble(v, lo, hi)));
  return v
  function bubble (V, lo, hi) {
    let last = lo;
    while (++lo < hi) {
      if (V[lo - 1] > V[lo]) {
        last = lo;
        swap(lo - 1, lo);
      }
    }
    return last;
    function swap (f, s) {
      let temp = V[f]
      V[f] = V[s]
      V[s] = temp
    }
  }
}
console.time('2次改进')
console.log(bubbleSort(VARR, 0, VARR.length))
console.timeEnd('2次改进') // 2次改进: 3.279ms
console.time('3次改进')
console.log(bubbleSort1(VARR, 0, VARR.length))
console.timeEnd('3次改进') // 3次改进: 0.313ms
console.time('原始打印')
console.log(VARR)
console.timeEnd('原始打印')