let arr = [2, 3, 5, 7, 11, 13, 17]

function abinSearch(A, e, lo, hi) {
  while (lo < hi) {
    let mi = (lo + hi) >> 1;
    if (e < A[mi]) {
      hi = mi;
    } else if (A[mi] < e) {
      lo = mi + 1;
    } else {
      return mi;
    }
  }
  return -1;
}

function binSearch(A, e, lo, hi) {
  while (1 < hi - lo) {
    let mi = (lo + hi) >> 1;
    (e < A[mi]) ? hi = mi: lo = mi;
  }
  return (e == A[lo]) ? lo : -1;
}

function rbinSearch(A, e, lo, hi) {
  while (lo < hi) {
    let mi = (lo + hi) >> 1;
    (e < A[mi]) ? hi = mi: lo = mi + 1;
  }
  return --lo;
}

abinSearch(arr, 16, 0, 7)