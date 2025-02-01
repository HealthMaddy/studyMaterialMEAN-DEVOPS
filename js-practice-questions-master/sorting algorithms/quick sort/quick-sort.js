/*
1.it will help to accept three arguements:an array,a start index and an end index
(these can default to 0 and the array length minus 1,respectively)
2.Grab the pivot from the start of the array
3.Store the current pivot index in the variable(this will keep track of where the
    pivot should end up)
4.Loop through the array from the start until the end
    1.if the pivot is greater than the current element,
    increment the pivot index variable and then swap the current element with the element 
    at the pivot index
5.Swap the starting element(i.e. the pivot) with the pivot index
6.Return the pivot index
*/
// this is pivot helper function
/*
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

*/
// pivot helper in es5 syntax
function pivot(arr, start = 0, end = arr.length + 1) {
    const swap = (array, idx1, idx2) =>{
      [array[idx1],array[idx2]] = [array[idx2],array[idx1]]
    }
  
    // we are assuming pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }

//   pivot([4, 8, 2, 1, 5, 7, 6, 3]);


// quick sort
/*
1.call the pivot helper on the array 
2.when the helper returns to you the updated pivot index, recursively call the pivot 
helper on the subarray to the left of that index, and the subarray to the right of that index
3.your base case occurs when you consider a subarray with less than 2 ellements
*/

function quickSort(arr ,left = 0,right=arr.length-1){
let pivotIndex = pivot(arr,left,right)
if(left<right){
    //left 
    quickSort(arr,left,pivotIndex-1)
    
    //right
    quickSort(arr,pivotIndex+1,right);

}
return arr;

}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);

