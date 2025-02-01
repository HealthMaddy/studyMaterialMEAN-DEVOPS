/*
Q1. write a functio that accepts an array and a value ,
loop through the array and check if the current array element is equal to the value ,
if it is ,return the index at which the element is found,if the value is never found ,
return -1
*/

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

linearSearch([32, 43, 1, 2], 1);
// time complexity is O(n)
