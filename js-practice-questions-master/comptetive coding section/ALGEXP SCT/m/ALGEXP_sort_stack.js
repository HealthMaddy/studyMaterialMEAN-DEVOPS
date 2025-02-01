/*
Sort Stack
Write a function that takes in an array of integers representing a stack, recursively sorts the
stack in place (i.e., doesn't create a brand new array), and returns it.
The array must be treated as a stack, with the end of the array as the top of the stack.
Therefore, you're only allowed to
Pop elements from the top of the stack by removing elements from the end of the array
using the built-in .pop() method in your programming language of choice.
Push elements to the top of the stack by appending elements to the end of the array
using the built-in .append() method in your programming language of choice.
Peek at the element on top of the stack by accessing the last element in the array.
You're not allowed to perform any other operations on the input array, including accessing
elements (except for the last element), moving elements, etc.. You're also not allowed to use any
other data structures, and your solution must be recursive.
Sample Input
stack = [-5, 2, -2, 4, 3, 1]
Sample Output
[-5, -2, 1, 2, 3, 4]
*/

//SOLUTION 4
//TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n) - where n is the length of the stack

function sortStack(stack) {
  if (stack.length === 0) return stack;

  const top = stack.pop();

  sortStack(stack);

  insertSortedOrder(stack, top);

  return stack;
}

function insertSortedOrder(stack, value) {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  const top = stack.pop();

  insertSortedOrder(stack, value);
  stack.push(top);
}
