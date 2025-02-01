/*
Selection Sort
Write a function that takes in an array of
integers and returns a sorted version of that
array. Use the Selection Sort algorithm to sort
the array.
If you're unfamiliar with Selection Sort, we
recommend watching the Conceptual
Overview section of this question's video
explanation before starting to code.
Sample Input
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

//SOLUTION 1
//Best: TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1)
//Average: TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1)
//Worst: TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1)

function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = smallestIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }

  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
