let V = [11, 23, 19, 7, 17, 5, 3, 13, 2, 29]
function bubblesort (arr, n) {
  for (let sorted = false; sorted = !sorted; n--) {
    for (let i = 0; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(i - 1, i)
        sorted = false
      }
    }
  }
}
function swap (f, s) {
  let temp = V[f]
  V[f] = V[s]
  V[s] = temp
}
bubblesort(V, V.length)
console.log(V)