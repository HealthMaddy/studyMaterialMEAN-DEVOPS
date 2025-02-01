/*
Monotonic Array
Write a function that takes in an array of
integers and returns a boolean representing
whether the array is monotonic.
An array is said to be monotonic if its
elements, from left to right, are entirely nonincreasing or entirely non-decreasing.
Non-increasing elements aren't necessarily
exclusively decreasing; they simply don't
increase. Similarly, non-decreasing elements
aren't necessarily exclusively increasing; they
simply don't decrease.
Note that empty arrays and arrays of one
element are monotonic.
Sample Input
array = [-1, -5, -10, -1100, -1100,-1101,-1102,-9001]
Sample Output
true
*/

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) - where n is the length of the array

function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}

//SOLUTION 2
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) - where n is the length of the array

function isMonotonic(array) {
  if (array.length <= 2) return true;
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breaksDirection(direction, previousInt, currentInt) {
  const difference = currentInt - previousInt;
  if (direction > 0) return difference < 0;
  return difference > 0;
}

//SOLUTION 3
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) - where n is the length of the array

function isMonotonic(arr) {
  let point1 = 0;
  let point2 = 1;
  let grt = 0;
  let sm = 0;
  let cmn = 0
  if (!arr.length || arr.length === 1) return true;
  while (point1 < arr.length && point2 < arr.length) {
    if (arr[point1] == arr[point2]) {
      point1++;
      point2++
      cmn++
    } else if (arr[point1] < arr[point2]) {
      point1++;
      point2++
      grt++
    } else if (arr[point1] > arr[point2]) {
      point1++;
      point2++
      sm++
    }
  }

  return sm + cmn === arr.length - 1 || grt + cmn === arr.length - 1;
}