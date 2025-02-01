// problem statement
// solve using frequency counter pattern
// given two strings   find whether they are anagram or not

// assume  all letters willl be lowercase   there'll be no space no special characters etc
"use strict";
function findAnagram(str1, str2) {
  let strObj1 = {};
  let strObj2 = {};

  if (str1.length !== str2.length) {
    // edge case
    return false;
  }

  for (key of str1) {
    strObj1[key] = (strObj1[key] || 0) + 1;
  } // this loop is not even required
  for (key of str2) {
    strObj2[key] = (strObj2[key] || 0) + 1;
  }

  for (key of str1) {
    if (!strObj2[key]) {
      return false;
    } else {
      strObj2[key] -= 1;
    }
  }

  return true;
}

findAnagram("hello", "olleh");

findAnagram("hello", "olleh");
// some result examples
//  data for obj 1 {h: 1, e: 1, l: 2, o: 1}
//  data for obj 1 {o: 0, l: 0, e: 0, h: 0}
// true
// findAnagram("hello", "olheh");
// false
// findAnagram("hello", "olleh");
//  data for obj 1 {h: 1, e: 1, l: 2, o: 1}

//  data for obj 1 {o: 0, l: 0, e: 0, h: 0}
// true

function findAnagram(str1, str2) {
  let strObj1 = {};
  let strObj2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let key of str1) {
    strObj1[key] = (strObj1[key] || 0) + 1;
  }
  for (let key of str2) {
    strObj2[key] = (strObj2[key] || 0) + 1;
  }

  for (let key of str1) {
    if (!strObj2[key]) {
      return false;
    } else {
      strObj2[key] -= 1;
    }
  }
}
