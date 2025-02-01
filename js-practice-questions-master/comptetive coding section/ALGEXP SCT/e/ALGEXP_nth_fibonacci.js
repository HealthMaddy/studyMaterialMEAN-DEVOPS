/*
Nth Fibonacci
The Fibonacci sequence is defined as follows:
the first number of the sequence is 0 , the
second number is 1 , and the nth number is
the sum of the (n - 1)th and (n - 2)th numbers.
Write a function that takes in an integer n
and returns the nth Fibonacci number.
Important note: the Fibonacci sequence is
often defined with its first two numbers as
F0 = 0 and F1 = 1 . For the purpose of
this question, the first Fibonacci number is
F0 ; therefore, getNthFib(1) is equal to
F0 , getNthFib(2) is equal to F1 , etc..
Sample Input #1
n = 2
Sample Output #1
1 // 0, 1
Sample Input #2
n = 6
Sample Output #2
5 // 0, 1, 1, 2, 3, 5
*/

//SOLUTION 1
// TIME COMPLEXITY O(2^n) | SPACE COMPLEXITY O(n)
function fib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function fib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = fib(n - 1, memoize) + fib(n - 2, memoize);
    return memoize[n];
  }
}

//SOLUTION 3
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)
function fib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
