/*
Reverse Words In String
Write a function that takes in a string of words separated by one or more whitespaces and
returns a string that has these words in reverse order. For example, given the string
"tim is great" , your function should return "great is tim" .
For this problem, a word can contain special characters, punctuation, and numbers. The words
in the string will be separated by one or more whitespaces, and the reversed string must
contain the same whitespaces as the original string. For example, given the string
"whitespaces 4" you would be expected to return "4 whitespaces" .
Note that you're not allowed to to use any built-in split or reverse methods/functions.
However, you are allowed to use a built-in join method/function.
Also note that the input string isn't guaranteed to always contain words.
Sample Input
string = "AlgoExpert is the best!"
Sample Output
"best! the is AlgoExpert"
*/

//SOLUTION 1
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) - where n is the length of the string

function reverseWordsInString(string) {
  const words = [];
  let startOfWord = 0;
  for (let idx = 0; idx < string.length; idx++) {
    const character = string[idx];
    if (character === " ") {
      words.push(string.slice(startOfWord, idx));
      startOfWord = idx;
    } else if (string[startOfWord] === " ") {
      words.push(" ");
      startOfWord = idx;
    }
  }

  words.push(string.slice(startOfWord));
  reverseList(words);
  return words.join("");
}

function reverseList(list) {
  let start = 0;
  let end = list.length - 1;

  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) - where n is the length of the string

function reverseWordsInString(string) {
  const characters = [];
  for (const char of string) {
    characters.push(char);
  }

  reverseListRange(characters, 0, characters.length - 1);
  let startOfWord = 0;

  while (startOfWord < characters.length) {
    let endOfWord = startOfWord;
    while (endOfWord < characters.length && characters[endOfWord] != " ") {
      endOfWord++;
    }

    reverseListRange(characters, startOfWord, endOfWord - 1);
    startOfWord = endOfWord + 1;
  }
  return characters.join("");
}

function reverseListRange(list, start, end) {
  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}
