/*
Find Three Largest
Numbers
Write a function that takes in an array of at
least three integers and, without sorting the
input array, returns a sorted array of the
three largest integers in the input array.
The function should return duplicate integers
if necessary; for example, it should return
[10, 10, 12] for an input array of
[10, 5, 9, 10, 12] .
Sample Input
array = [141, 1, 17, -7, -17, -27,18,541]
Sample Output
[18, 141, 541]
*/

//SOLUTION 1 :Recursive
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)

function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];

  for (num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftNupdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftNupdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftNupdate(threeLargest, num, 0);
  }
}

function shiftNupdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}
