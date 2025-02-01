/*
Smallest Difference
Write a function that takes in two non-empty
arrays of integers, finds the pair of numbers
(one from each array) whose absolute
difference is closest to zero, and returns an
array containing these two numbers, with the
number from the first array in the first
position.
Note that the absolute difference of two
integers is the distance between them on the
real number line. For example, the absolute
difference of -5 and 5 is 10, and the absolute
difference of -5 and -4 is 1.
You can assume that there will only be one
pair of numbers with the smallest difference.
Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
Sample Output
[28, 26]
*/

//SOLUTION 1
// TIME COMPLEXITY O(nlog(n)+mlog(m)) | SPACE COMPLEXITY O(1)

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (firstNum > secondNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}



//SOLUTION 2
// TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1)

function smallestDifference(array1, array2) {
  let smallestDifference = Number.MAX_VALUE
  let arraySet = []

  for (let a = 0; a < array1.length; a++) {
    for (let b = 0; b < array2.length; b++) {

      if (Math.abs(array1[a] - array2[b]) < smallestDifference) {
        smallestDifference = Math.abs(array1[a] - array2[b])
        arraySet = [array1[a], array2[b]]
      }
    }
  }
  return arraySet
}

