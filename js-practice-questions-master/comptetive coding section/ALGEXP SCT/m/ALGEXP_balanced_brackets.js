/*
Balanced Brackets
Write a function that takes in a string made up of brackets ( ( , [ , { , ) , ] , and } ) and
other optional characters. The function should return a boolean representing whether the string is
balanced with regards to brackets.
A string is said to be balanced if it has as many opening brackets of a certain type as it has closing
brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a
corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a
corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in
[(]) .
Sample Input
string = "([])(){}(())()()"
Sample Output
true // it's balanced
*/

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function balancedBrackets(string) {
  const openingBrackets = "([{";
  const closingBrackets = "}])";
  const matchingBrackets = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}


// SOLUTION 2
function balanceBrackets(str) {
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let el of str) {
    if (Object.values(brackets).includes(el)) {
      stack.push(el);
    } else if (brackets.hasOwnProperty(el)) {
      if (!stack.length || brackets[el] != stack.pop()) {
        return false;
      }
    }
  }

  return stack.length == 0;
}