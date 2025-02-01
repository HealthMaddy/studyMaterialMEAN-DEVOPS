function findMinMaxNum(arr) {
  let minVal = arr[0];
  let maxVal = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }

  return { minVal, maxVal };
}

findMinMaxNum([1, 2, 4, 2, 4, 6, 9, 5, 3, 7, 8]);
