/*
Bubble Sort
Write a function that takes in an array of
integers and returns a sorted version of that
array. Use the Bubble Sort algorithm to sort
the array.
If you're unfamiliar with Bubble Sort, we
recommend watching the Conceptual
Overview section of this question's video
explanation before starting to code.
Sample Input
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

//SOLUTION 1 :Recursive
//BEST: TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)
//AVERAGE: TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1)
//WORST: TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1)

function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
