/*
River Sizes
You're given a two-dimensional array (a
matrix) of potentially unequal height and
width containing only 0 s and 1 s. Each 0
represents land, and each 1 represents
part of a river. A river consists of any number
of 1 s that are either horizontally or
vertically adjacent (but not diagonally
adjacent). The number of adjacent 1 s
forming a river determine its size.
Note that a river can twist. In other words, it
doesn't have to be a straight vertical line or a
straight horizontal line; it can be L-shaped,
for example.
Write a function that returns an array of the
sizes of all rivers represented in the input
matrix. The sizes don't need to be in any
particular order.
Sample Input
matrix = [
 [1, 0, 0, 1, 0],
 [1, 0, 1, 0, 0],
 [0, 0, 1, 0, 1],
 [1, 0, 1, 0, 1],
 [1, 0, 1, 1, 0],
]
Sample Output
[1, 2, 2, 2, 5] // The numbers could be ordered differently.
// The rivers can be clearly seen here:
// [
// [1, , , 1, ],
// [1, , 1, , ],
// [ , , 1, , 1],
// [1, , 1, , 1],
// [1, , 1, 1, ],
// ]
*/

//SOLUTION 1
//TIME COMPLEXITY O(wh) | SPACE COMPLEXITY O(wh)
function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map((value) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbours = getUnvisitedNeighbours(i, j, matrix, visited);
    for (const neighbour of unvisitedNeighbours) {
      nodesToExplore.push(neighbour);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbours(i, j, matrix, visited) {
  const unvisitedNeighbours = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbours.push([i - 1, j]);

  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbours.push([i + 1, j]);

  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbours.push([i, j - 1]);

  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbours.push([i, j + 1]);

  return unvisitedNeighbours;
}
