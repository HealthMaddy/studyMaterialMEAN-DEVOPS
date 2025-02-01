//1. array of integers we are getting
//2. can be +ve or -ve so make it positive
//q. find the pair with given sum in an array
//++++: also in algexp // sorting the array is optional  can work on array directly as well

//---------------------------------
// naive approach
// SOLUTION 1
// TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n^2)
let pairs = {};
function pairOfSum(array, sum) {
  let sortedArray = array.sort((a, b) => a - b);
  console.log("sorted array", sortedArray.length);
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] + sortedArray[j] == sum) {
        pairs[sum] = [sortedArray[i], sortedArray[j]];
        return pairs;
      }
    }
  }

  return "no pairs found";
}
let arr = [
  2, 3, 2, 5, 6, 6, 3, 2, 45, 2, 3, 3, 4, 5, 6, 8, 9, 53, 65, 32, 54, 68, 1, 67,
];
console.log(pairOfSum(arr, 69));
console.log(findsumPair(arr, 69));

//write a function thats accepts an array of nos ,and sum value

let pairs = {};
function findsumPair(arr, sum) {
  let sortedArr = arr.sort((a, b) => a - b);
  let i = 0;
  // for (let i = 0; i < sortedArr.length - 1; i++) {
  // j = i + 1;
  // console.log("i is", i, "j is ", j);
  for (let j = i + 1; j < sortedArr.length; j++) {
    i++;
    if (sortedArr[i] + sortedArr[j] === sum) {
      pairs["sum"] = [sortedArr[i], sortedArr[j]];
      return pairs;
    }
  }
  // }

  return "no pairs found";
}

console.log(findsumPair(arr, 69));

//----------------------------------
// SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)

function findSumPair2(array, targetSum) {
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

//---------------------------------
//SOLUTION 3
// TIME COMPLEXITY O(nlog(n)) | SPACE COMPLEXITY O(1)
function findSumPair3(array, targetSum) {
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
