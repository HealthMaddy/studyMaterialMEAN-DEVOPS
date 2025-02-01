/*
Remove Islands
You're given a two-dimensional array (a
matrix) of potentially unequal height and
width containing only 0 s and 1 s. The
matrix represents a two-toned image, where
each 1 represents black and each 0
represents white. An island is defined as any
number of 1 s that are horizontally or
vertically adjacent (but not diagonally
adjacent) and that don't touch the border of
the image. In other words, a group of
horizontally or vertically adjacent 1 s isn't
an island if any of those 1 s are in the first
row, last row, first column, or last column of
the input matrix.
Note that an island can twist. In other words,
it doesn't have to be a straight vertical line or
a straight horizontal line; it can be L-shaped,
for example.
You can think of islands as patches of black
that don't touch the border of the two-toned
image.
Write a function that returns a modified
version of the input matrix, where all of the
islands are removed. You remove an island
by replacing it with 0 s.
Naturally, you're allowed to mutate the input
matrix.
Sample Input
matrix =
[
 [1, 0, 0, 0, 0, 0],
 [0, 1, 0, 1, 1, 1],
 [0, 0, 1, 0, 1, 0],
 [1, 1, 0, 0, 1, 0],
 [1, 0, 1, 1, 0, 0],
 [1, 0, 0, 0, 0, 1],
]
Sample Output
[
 [1, 0, 0, 0, 0, 0],
 [0, 0, 0, 1, 1, 1],
 [0, 0, 0, 0, 1, 0],
 [1, 1, 0, 0, 1, 0],
 [1, 0, 0, 0, 0, 0],
 [1, 0, 0, 0, 0, 1],
]
// The islands that were removed
// [
// [ , , , , , ],
// [ , 1, , , , ],
// [ , , 1, , , ],
// [ , , , , , ],
// [ , , 1, 1, , ],
// [ , , , , , ],
// ]
*/

// common code
function getNeighbors(matrix, row, col) {
  const neighbors = [];

  const numRows = matrix.length;
  const numCols = matrix[row].length;

  if (row - 1 >= 0) neighbors.push([row - 1, col]); //UP
  if (row + 1 < numRows) neighbors.push([row + 1, col]); //DOWN
  if (col - 1 >= 0) neighbors.push([row, col - 1]); //LEFT
  if (col + 1 < numCols) neighbors.push([row, col + 1]); //RIGHT
  return neighbors;
}

//SOLUTION 1
//TIME COMPLEXITY O(wh) | SPACE COMPLEXITY O(wh) -where w and h
// are the width and height of the input matrix

function removeIslands(matrix) {
  const onesConnectedToBorder = [];
  for (let row = 0; row < matrix.length; row++) {
    onesConnectedToBorder.push([]);
    for (let col = 0; col < matrix[0].length; col++) {
      onesConnectedToBorder[row].push(false);
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder) continue;

      if (matrix[row][col] != 1) continue;

      findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);
    }
  }

  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      if (onesConnectedToBorder[row][col]) continue;

      matrix[row][col] = 0;
    }
  }
  return matrix;
}

function findOnesConnectedToBorder(
  matrix,
  startRow,
  startCol,
  onesConnectedToBorder
) {
  const stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;

    const alreadyVisited = onesConnectedToBorder[currentRow][currentCol];
    if (alreadyVisited) continue;
    onesConnectedToBorder[currentRow][currentCol] = true;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);
    for (const neighbour of neighbors) {
      const [row, col] = neighbor;

      if (matrix[row][col] != 1) continue;

      stack.push(neighbour);
    }
  }
}

//SOLUTION 2
//TIME COMPLEXITY O(wh) | SPACE COMPLEXITY O(wh) -where w and h
// are the width and height of the input matrix

function removeIslands(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matirx[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder) continue;

      if (matrix[row][col] != 1) continue;

      changeOnesConnectedToBorderToTwos(matrix, row, col);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const color = matrix[row][col];
      if (color === 1) {
        matrix[row][col] = 0;
      } else if (color === 2) {
        matrix[row][col] = 1;
      }
    }
  }
  return matrix;
}

function changeOnesConnectedToBorderToTwos(matrix, startRow, startCol) {
  const stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;
    matrix[currentRow][currentCol] = 2;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);
    for (const neighbour of neighbors) {
      const [row, col] = neighbour;

      if (matrix[row][col] != 1) continue;

      stack.push(neighbour);
    }
  }
}
