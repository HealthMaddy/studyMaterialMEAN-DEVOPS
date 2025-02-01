// SOLUTION 1
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)

function sortedSquaredArray(array) {
  const squaredArray = []; // we can also use new Array(array.length).fill(0) but [] is a good practice
  for (key in array) {
    squaredArray.push(key ** 2);
  }

  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}

// SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function sortedSquaredArray(array) {
  const squaredArray = []; // we can also use new Array(array.length).fill(0) but [] is a good practice
  for (let i = 0; i < array.length; i++) {
    squaredArray[i] = array[i] ** 2;
  }

  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}

// SOLUTION 3
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is the length of the array
function sortedSquaredArray(array) {
  const squaredArray = []; // we can also use new Array(array.length).fill(0) but [] is a good practice
  let smallValueIdx = 0;
  let largeValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallValue = array[smallValueIdx];
    const largeValue = array[largeValueIdx];
    if (Math.abs(smallValue) > Math.abs(largeValue)) {
      squaredArray[i] = smallValue ** 2;
      smallValueIdx++;
    } else {
      squaredArray[i] = largeValue ** 2;
      largeValueIdx--;
    }
  }

  return squaredArray;
}
