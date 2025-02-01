/*
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters
and a non-negative integer representing a
key, write a function that returns a new string
obtained by shifting every letter in the input
string by k positions in the alphabet, where k
is the key.
Note that letters should "wrap" around the
alphabet; in other words, the letter z shifted
by one returns the letter a .
Sample Input
string = "xyz"
key = 2
Sample Output
"zab"
*/

//SOLUTION 1
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)

function caesarCypherEncryptor(string, key) {
  let newString = [];
  let newKey = key % 26;
  for (let letter of string) {
    newString.push(getNewLetter(letter, newKey));
  }

  return newString.join("");
}

function getNewLetter(letter, key) {
  let newCode = letter.charCodeAt() + key;
  return newCode <= 122
    ? String.fromCharCode(newCode)
    : String.fromCharCode(96 + (newCode % 122));
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)

function caesarCypherEncryptor(string, key) {
  let newString = [];
  let newKey = key % 26;
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split(""); //HERE SPLIT IS OPTIONAL
  for (let letter of string) {
    newString.push(getNewLetter(letter, newKey, alphabets));
  }

  return newString.join("");
}

function getNewLetter(letter, key, array) {
  let newCode = array.indexOf(letter) + key;
  return array[newCode % 26];
}
