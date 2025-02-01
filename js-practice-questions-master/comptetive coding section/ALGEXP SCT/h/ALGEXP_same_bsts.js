/*
Same BSTs
An array of integers is said to represent the Binary Search Tree (BST) obtained by inserting each
integer in the array, from left to right, into the BST.
Write a function that takes in two arrays of integers and determines whether these arrays
represent the same BST. Note that you're not allowed to construct any BSTs in your code.
A BST is a Binary Tree that consists only of BST nodes. A node is said to be a valid BST node if
and only if it satisfies the BST property: its value is strictly greater than the values of every node to
its left; its value is less than or equal to the values of every node to its right; and its children nodes
are either valid BST nodes themselves or None / null .
Sample Input
arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]
Sample Output
true // both arrays represent the BST below
 10
 / \
 8 15
 / / \
 5 12 94
 / / /
2 11 81

*/

//SOLUTION 1
//TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n^2) -where n is the number of
// nodes in each array, respectively

function sameBsts(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
  if (arrayOne[0] != arrayTwo[0]) return false;

  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
  const smaller = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) smaller.push(array[i]);
  }
  return smaller;
}

function getBiggerOrEqual(array) {
  const biggerOrEqual = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
  }

  return biggerOrEqual;
}

//SOLUTION 2
//TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(d) -where n is the number of
// nodes in each array, respectively, and d is the depth of the BST that they
// represent
function sameBsts(arrayOne, arrayTwo) {
  return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBsts(
  arrayOne,
  arrayTwo,
  rootIdxOne,
  rootIdxTwo,
  minVal,
  maxVal
) {
  if (rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo;

  if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;

  const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal);
  const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal);
  const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(
    arrayOne,
    rootIdxOne,
    maxVal
  );
  const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(
    arrayTwo,
    rootIdxTwo,
    maxVal
  );

  const currentValue = arrayOne[rootIdxOne];
  const leftAreSame = areSameBsts(
    arrayOne,
    arrayTwo,
    leftRootIdxOne,
    leftRootIdxTwo,
    minVal,
    currentValue
  );
  const rightAreSame = areSameBsts(
    arrayOne,
    arrayTwo,
    rightRootIdxOne,
    rightRootIdxTwo,
    currentValue,
    maxVal
  );

  return leftAreSame && rightAreSame;
}

function getIdxOfFirstSmaller(array, startingIdx, minVal) {
  for (i = startingIdx + 1; i < array.length; i++) {
    if (array[i] < array[startingIdx] && array[i] >= minVal) return i;
  }
  return -1;
}

function getIdxOfFirstBiggerOrEqual(array, startingIdx, maxVal) {
  for (let i = startingIdx + 1; i < array.length; i++) {
    if (array[i] >= array[startingIdx] && array[i] < maxVal) return i;
  }
  return -1;
}
