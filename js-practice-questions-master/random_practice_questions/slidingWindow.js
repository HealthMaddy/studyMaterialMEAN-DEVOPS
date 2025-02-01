// problem statement  get max sum of 2 numbers

function maxSum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log("max sum tracker here", maxSum);
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  console.log("max sum here", maxSum);
  return maxSum;
}

maxSum([2, 3, 5, 3, 5, 7, 4, 9, 3, 1, 4, 6], 2);


function maxSum(arr, num){
  if(arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for(let i=0; i< num; i++){
    maxSum += arr[i];

  }
  tempSum = maxSum;

  for(let i = num; i< arr.length; i++){
    tempSum = tempSum - arr[i -num] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }



return maxSum;

}