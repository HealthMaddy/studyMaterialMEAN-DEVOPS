/*
Spiral Traverse
Write a function that takes in an n x m twodimensional array (that can be square-shaped
when n == m) and returns a one-dimensional
array of all the array's elements in spiral
order.
Spiral order starts at the top left corner of the
two-dimensional array, goes to the right, and
proceeds in a spiral pattern all the way until
every element has been visited.
Sample Input
array = [
 [1, 2, 3, 4],
 [12, 13, 14, 5],
 [11, 16, 15, 6],
 [10, 9, 8, 7],
]
Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
*/

//SOLUTION 1
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is the total number of
//  elements in the array

function spiralTraverse(array) {
  const result = [];
  let startRow = 0,
    endRow = array.length - 1,
    startCol = 0,
    endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is the total number of
//  elements in the array

function spiralTraverse(array) {
  const result = [];

  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
  return result;
}

function spiralFill(array, startRow, endRow, startCol, endCol, result) {
  if (startRow > endRow || startCol > endCol) return;

  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col]);
  }

  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol]);
  }

  for (let col = endCol - 1; col >= startCol; col--) {
    if (startRow === endRow) break;
    result.push(array[endRow][col]);
  }
  for (let row = endRow - 1; row > startRow; row--) {
    if (startCol === endCol) break;
    result.push(array[row][startCol]);
  }

  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
}
