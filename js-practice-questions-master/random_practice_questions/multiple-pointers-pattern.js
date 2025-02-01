// problem statement
// get the pair of no's in an array whose sum is zero
// use multiple pointers pattern approach
// assume array is sorted and contains only numbers

function findSumZeroPair(arr) {
  let left = arr.length - 1;
  let right = 0;

  while (right < left) {
    let sum = arr[right] + arr[left];

    if (sum === 0) {
      return [arr[right], arr[left]];
    }

    if (sum > 0) {
      left--;
    } else {
      right++;
    }
  }
}

findSumZeroPair([-4, -3, -2, -1, 0, 2, 5, 6]);

// problem two find unique numbers in an array
// assume array is sorted

function findUniqueNumbers(arr) {
  if (arr.length <= 0) {
    return 0;
  }

  let i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log("array here", arr);
  let uniqueArr = arr.slice(0, i + 1);
  return { lastUniqueNo: arr[i], uniqueArr, arr };
}

findUniqueNumbers([1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9]);

// example result
// {lastUniqueNo: 9, uniqueArr: Array(9), arr: Array(17)}
// arr: Array(17)
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// 6: 7
// 7: 8
// 8: 9
// 9: 5
// 10: 6
// 11: 6
// 12: 7
// 13: 8
// 14: 8
// 15: 9
// 16: 9
// length: 17
// __proto__: Array(0)
// lastUniqueNo: 9
// uniqueArr: Array(9)
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// 6: 7
// 7: 8
// 8: 9
// length: 9
