/*
Q1. start looping from a variable called i the end of the array towards the beginning],
start the inner loop with a variable called j from the beginning until i-1,
if arr[j] is greater than ar[j+1],swap thpse two values!
return the sorted array
*/

// sol 1
// function bubbleSort(arr) {

//     for (j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //swap
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }

//   }
// incomplete solution
//   return arr;
// }

// sol 2
// function bubbleSort(arr) {
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //swap
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr
// }

// sol 3 es6 syntax
// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

// bubbleSort([23, 41, 22, 54, 11, 6, 9]);

// sol with short circuiting when array is nearly sorted
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
