/*
First Non-Repeating
Character
Write a function that takes in a string of
lowercase English-alphabet letters and
returns the index of the string's first nonrepeating character.
The first non-repeating character is the first
character in a string that occurs only once.
If the input string doesn't have any nonrepeating characters, your function should
return -1 .
Sample Input
string = "abcdcaf"
Sample Output
1 // the first non repeating char is "b" found at idx 1
*/

//SOLUTION 1
//TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(1) - where n is the length of the input string;

function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let foundDuplicate = true;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) foundDuplicate = true;
    }
    if (!foundDuplicate) return idx;
  }
  return -1;
}

//SOLUTION 2
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1) - where n is the length of the input string,
// the constant space is because the input string only has lowercase eng alphabet letters,
// thus our hashtable will never have more than 26 characters freqencies.

function firstNonRepeatingCharacter(string) {
  const characterCount = {};

  for (const char of string) {
    if (!(char in characterCount)) characterCount[char] = 0;
    characterCount[char]++;
  }

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (characterCount[character] === 1) return i;
  }
  return -1;
}
