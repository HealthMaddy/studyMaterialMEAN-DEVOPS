/*
Kadane's Algorithm
Write a function that takes in a non-empty
array of integers and returns the maximum
sum that can be obtained by summing up all
of the integers in a non-empty subarray of the
input array. A subarray must only contain
adjacent numbers (numbers next to each
other in the input array).
Sample Input
array = [3, 5, -9, 1, 3, -2, 3, 4,7,2,-9,6,3,1,-5,4]
Sample Output
19 // [1, 3, -2, 3, 4, 7, 2, -9, 6,3,1]
*/

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) -where n is the length of the input array

function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
