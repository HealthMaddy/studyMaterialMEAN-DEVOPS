/*
Generate Document
You're given a string of available characters
and a string representing a document that
you need to generate. Write a function that
determines if you can generate the
document using the available characters. If
you can generate the document, your
function should return true ; otherwise, it
should return false .
You're only able to generate the document if
the frequency of unique characters in the
characters string is greater than or equal to
the frequency of unique characters in the
document string. For example, if you're given
characters = "abcabc" and
document = "aabbccc" you cannot
generate the document because you're
missing one c .
The document that you need to create may
contain any characters, including special
characters, capital letters, numbers, and
spaces.
Note: you can always generate the empty
string ( "" ).
Sample Input
characters = "Bste!hetsi ogEAxpel
document = "AlgoExpert is the Be
Sample Output
true
*/

//SOLUTION 1
//TIME COMPLEXITY O(m *(n+m)) | SPACE COMPLEXITY O(1) - where n is the no. of characters
//  and m is the length of the document;

function generateDocument(characters, document) {
  for (character of documents) {
    const docChar = generateFrequency(character, document);
    const charsChar = generateFrequency(character, characters);
    if (docChar > charsChar) return false;
  }

  return true;
}

// common helper function
function generateFrequency(character, array) {
  let frequency = 0;
  for (const char of array) {
    if (char === character) frequency++;
  }
  return frequency;
}

//SOLUTION 2
//TIME COMPLEXITY O(c *(n+m)) | SPACE COMPLEXITY O(c) -  where n is the no. of characters
//  and m is the length of the document, and c is the no. of unique characters in the document

function generateDocument(characters, document) {
  const alreadyExisting = new Set();
  for (character of documents) {
    if (character in alreadyExisting) continue;
    const docChar = generateFrequency(character, document);
    const charsChar = generateFrequency(character, characters);
    if (docChar > charsChar) return false;

    alreadyExisting.add(character);
  }

  return true;
}

//SOLUTION 3
//TIME COMPLEXITY O(n+m) | SPACE COMPLEXITY O(c) -  where n is the no. of characters
//  and m is the length of the document, and c is the no. of unique characters in the characterString

function generateDocument(characters, document) {
  const charactersCount = {};
  for (const character of characters) {
    if (!(character in charactersCount)) charactersCount[character] = 0;
    charactersCount[character]++;
  }

  for (const character of document) {
    if (!(character in charactersCount) || charactersCount[character] === 0)
      return false;
    charactersCount[character]--;
  }

  return true;
}
