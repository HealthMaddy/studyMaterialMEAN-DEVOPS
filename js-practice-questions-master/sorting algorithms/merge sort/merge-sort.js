/*
1.In order to implement merge sort, it's useful to first implement
 a function responsible for merging two sorted arrays
2.given two arrays which are sorted ,and consists of all of the elements in the two input arrays
3.this function should run in O(n+m) time and O(n+m) space and should not modify the parameters
passed to it.
 */

/*
this is for  merging arrays only:

1.Create an empty array,take a look at the smallest values in each input array
2.while there are still values we haven't looked at..
    1.if the value in the first array is smaller than the value in second array,
    push the value in the first array into our results and move on to the next value
    in the first array
    2.if the value in the first array is larger than the value in the second array,
    push the value in the second array into our results and move on to the next value
    in the second array
    3.once we exhaust one array,push in all the remaining values from the other array
*/

// it works with two sorted arrays

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// merge([1, 10, 50], [2, 14, 99, 100]);

/*
1.Break up the array into halves until you have arrays that are empty or have one element
2.once you have smaller sorted arrays ,merge those arrays with other sorted arrays until
  you are back at the full length of the array
3.once the array has been merged back together,return the merged(and sorted!) array
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10,24,76,73,39,88,19,70,1])


