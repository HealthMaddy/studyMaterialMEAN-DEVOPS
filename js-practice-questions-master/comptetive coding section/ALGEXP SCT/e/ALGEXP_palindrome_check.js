/*
Palindrome Check
Write a function that takes in a non-empty
string and that returns a boolean
representing whether the string is a
palindrome.
A palindrome is defined as a string that's
written the same forward and backward. Note
that single-character strings are palindromes.
Sample Input
string = "abcdcba"
Sample Output
true
*/

//SOLUTION 1
// TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n)
function isPalindrome(string) {
  let rev = "";
  for (let i = string.length - 1; i >= 0; i--) {
    rev += string[i];
  }

  return string === rev;
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function isPalindrome(string) {
  let rev = [];
  for (let i = string.length - 1; i >= 0; i--) {
    rev.push(string[i]);
  }

  return string === rev.join("");
}

//SOLUTION 3
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function isPalindrome(string, i = 0) {
  let j = string.length - 1 - i;

  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
//SOLUTION 4
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    rigth--;
  }
  return true;
}
