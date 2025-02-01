/*
Staircase Traversal
You're given two positive integers representing the height of a staircase and the maximum
number of steps that you can advance up the staircase at a time. Write a function that
returns the number of ways in which you can climb the staircase.
For example, if you were given a staircase of height = 3 and maxSteps = 2 you could
climb the staircase in 3 ways. You could take 1 step, 1 step, then 1 step, you could also take
1 step, then 2 steps, and you could take 2 steps, then 1 step.
Note that maxSteps <= height will always be true.
Sample Input
height = 4
maxSteps = 2
Sample Output
5
// You can climb the staircase in the following ways:
// 1, 1, 1, 1
// 1, 1, 2
// 1, 2, 1
// 2, 1, 1
// 2, 2
*/

//SOLUTION 1
//TIME COMPLEXITY O(k^n) | SPACE COMPLEXITY O(n) - where n is the height of the staircase
// and k is the number of allowed steps
function staircaseTraversal(height, maxSteps) {
  return numberOfWaysToTop(height, maxSteps);
}

function numberOfWaysToTop(height, maxSteps) {
  if (height <= 1) return 1;

  let numberOfWays = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps);
  }

  return numberOfWays;
}

//SOLUTION 2
//TIME COMPLEXITY O(n * k) | SPACE COMPLEXITY O(n) - where n is the height of the staircase
// and k is the number of allowed steps

function staircaseTraversal(height, maxSteps) {
  return numberOfWaysToTop(height, maxSteps, { 0: 1, 1: 1 });
}

function numberOfWaysToTop(height, maxSteps, memoize) {
  if (height in memoize) return memoize[height];

  let numberOfWays = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps, memoize);
  }
  memoize[height] = numberOfWays;
  return numberOfWays;
}

//SOLUTION 3
//TIME COMPLEXITY O(n * k) | SPACE COMPLEXITY O(n) - where n is the height of the staircase
// and k is the number of allowed steps
function staircaseTraversal(height, maxSteps) {
  const waysToTop = new Array(height + 1).fill(0);
  waysToTop[0] = 1;
  waysToTop[1] = 1;

  for (let currentHeight = 2; currentHeight < height + 1; currentHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= currentHeight) {
      waysToTop[currentHeight] =
        waysToTop[currentHeight] + waysToTop[currentHeight - step];
      step++;
    }
  }

  return waysToTop[height];
}

//SOLUTION 4
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is the height of the staircase
// and k is the number of allowed steps

function staircaseTraversal(height, maxSteps) {
  let currentNumberOfWays = 0;
  const waysToTop = [1];
  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;

    if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];
    currentNumberOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumberOfWays);
  }
  return waysToTop[height];
}
