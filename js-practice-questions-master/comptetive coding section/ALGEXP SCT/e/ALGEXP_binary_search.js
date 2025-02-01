/*
Binary Search
Write a function that takes in a sorted array of
integers as well as a target integer. The
function should use the Binary Search
algorithm to determine if the target integer is
contained in the array and should return its
index if it is, otherwise -1 .
If you're unfamiliar with Binary Search, we
recommend watching the Conceptual
Overview section of this question's video
explanation before starting to code.
Sample Input
array = [0, 1, 21, 33, 45, 45, 61]
    target = 33
Sample Output
3
*/

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

//SOLUTION 1 :Recursive
// TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(log(n))

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const match = array[middle];

  if (target === match) {
    return middle;
  } else if (target < middle) {
    return binarySearchHelper(array, target, left, milddle - 1);
  } else {
    return binarySearchHelper(array, target, milddle + 1, right);
  }
}

//SOLUTION 2 :Iterative
// TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(1)
function binarySearchHelper(array, target, left, rigth) {
  while (left <= rigth) {
    const middle = Math.floor((left + rigth) / 2);
    const match = array[middle];

    if (target === match) {
      return middle;
    } else if (target < middle) {
      rigth = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
