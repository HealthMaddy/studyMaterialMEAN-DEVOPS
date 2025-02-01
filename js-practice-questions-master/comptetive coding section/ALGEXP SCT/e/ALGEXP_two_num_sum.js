/*
Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target
sum. If any two numbers in the input array sum up to the target sum, the function should return them in
an array, in any order. If no two numbers sum up to the target sum, the function should return an empty
array.
Note that the target sum has to be obtained by summing two different integers in the array; you can't add
a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum.
Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
Sample Output
[-1, 11] // the numbers could be in reverse order

*/

//SOLUTION 1
// TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n^2)

function getTargetSum(arr, targetSum) {
  if (!arr.length) return;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j] && arr[i] + arr[j] === targetSum) {
        return [arr[i], arr[j]];
      }
    }
  }

  return [];
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

//SOLUTION 3
// TIME COMPLEXITY O(nlog(n)) | SPACE COMPLEXITY O(1)
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
