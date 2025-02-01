/*
Longest Common Subsequence
Write a function that takes in two strings and returns their longest common subsequence.
A subsequence of a string is a set of characters that aren't necessarily adjacent in the string but that are in
the same order as they appear in the string. For instance, the characters ["a", "c", "d"] form a
subsequence of the string "abcd" , and so do the characters ["b", "d"] . Note that a single character
in a string and the string itself are both valid subsequences of the string.
You can assume that there will only be one longest common subsequence.
Sample Input
str1 = "ZXVVYZW"
str2 = "XKYKZPW"
Sample Output
["X", "Y", "Z", "W"]
*/

//SOLUTION 1
//TIME COMPLEXITY O(nm*min(n,m)) | SPACE COMPLEXITY O(nm*min(n,m))
function longestCommonSubsequence(str1, str2) {
  let lcs = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = new Array(str1.length + 1).fill([]);
    lcs.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
      } else {
        lcs[i][j] =
          lcs[i - 1][j].length > lcs[i][j - 1].length
            ? lcs[i - 1][j]
            : lcs[i][j - 1];
      }
    }
  }

  return lsc[str2.length][str1.length];
}

//SOLUTION 2
//TIME COMPLEXITY O(nm*min(n,m)) | SPACE COMPLEXITY O((min(n,m))^2)
function longestCommonSubsequence(str1, str2) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenLcs = new Array(small.length + 1).fill([]);
  const oddLcs = new Array(small.length + 1).fill([]);

  for (let i = 1; i < big.length + 1; i++) {
    let currentLcs, previousLcs;
    if (i % 2 === 1) {
      currentLcs = oddLcs;
      previousLcs = evenLcs;
    } else {
      currentLcs = evenLcs;
      previousLcs = oddLcs;
    }

    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentLcs[j] = previousLcs[j - 1].concat(big[i - 1]);
      } else {
        currentLcs[j] =
          previousLcs[j].length > currentLcs[j - 1].length
            ? previousLcs[j]
            : currentLcs[j - 1];
      }
    }
  }
  return big.length % 2 === 0 ? evenLcs[small.length] : oddLcs[small.length];
}
//SOLUTION 3
//TIME COMPLEXITY O(nm) | SPACE COMPLEXITY O(nm)
function longestCommonSubsequence(str1, str2) {
  const lcs = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      const entry = new Array(4);
      entry[1] = 0;
      row.push(entry);
    }
    lcs.push(row);
  }

  for (let i = 1; str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lcs[i][j] = [str2[i - 1], lcs[i - 1][j - 1][1] + 1, i - 1, j - 1];
      } else {
        if (lcs[i - 1][j][1] > lcs[i][j - 1][1]) {
          lcs[i][j] = [null, lcs[i - 1][j][1], i - 1, j];
        } else {
          lcs[i][j] = [null, lcs[i][j - 1][1], i, j - 1];
        }
      }
    }
  }
  return buildSequence(lcs);
}

function buildSequence(lcs) {
  const sequence = [];
  let i = lcs.length - 1;
  let j = lcs[0].length - 1;
  while (i !== 0 && j !== 0) {
    let currentEntry = lcs[i][j];
    if (currentEntry[0]) {
      sequence.unshift(currentEntry[0]);
    }
    i = currentEntry[2];
    j = currentEntry[3];
  }
  return sequence;
}
//SOLUTION 4
//TIME COMPLEXITY O(nm) | SPACE COMPLEXITY O(nm)
function longestCommonSubsequence(str1, str2) {
  const lengths = [];
  for (let i = 0; i < str2.length + 1; i++) {
    lengths.push(new Array(str1.length + 1).fill(0));
  }
  for (let i = 0; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lengths[i][j] = lengths[i - 1][j - 1] + 1;
      } else {
        lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
      }
    }
  }
  return buildSequence(lengths, str1);
}

function buildSequence(lengths, string) {
  const sequence = [];
  let i = lengths.length - 1;
  let j = lengths[0].length - 1;
  while (i !== 0 && j !== 0) {
    if (lengths[i][j] === lengths[i - 1][j]) {
      i--;
    } else if (lengths[i][j] === lengths[i][j - 1]) {
      j--;
    } else {
      sequence.unshift(string[j - 1]);
      i--;
      j--;
    }
  }
  return sequence;
}
