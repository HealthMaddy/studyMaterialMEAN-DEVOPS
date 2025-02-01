/*
Validate Subsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a
subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in
the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence
of the array [1, 2, 3, 4] , and so do the numbers [2, 4] . Note that a single number in an array
and the array itself are both valid subsequences of the array.
Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
Sample Output
true
*/

// check if the array is subsequence of first array or not
// means the second array has all elements of  1st array  that too in same sequence or not?

//SOLUTION 1
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) -where n is length of array

function isValidSubsequence(array, sequence) {
  let arrayIdx = 0;
  let sequenceIdx = 0;

  while (arrayIdx < array.length && sequenceIdx < sequence.length) {
    if (array[arrayIdx] === sequence[sequenceIdx]) sequenceIdx++;
    arrayIdx++;
  }
  return sequenceIdx === sequence.length;
}

isValidSubsequence([1, 3, 5, 7, 55, 33, 76], [3, 5, 7]);

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) -where n is length of array

function isValidSubsequence(array, sequence) {
  let sequenceIdx = 0;
  for (const val of array) {
    if (sequenceIdx === sequence.length) break;
    if (sequence[sequenceIdx] === val) sequenceIdx++;
  }
  return sequenceIdx === sequence.length;
}
