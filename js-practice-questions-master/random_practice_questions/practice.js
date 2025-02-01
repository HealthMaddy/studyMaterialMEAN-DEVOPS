// all practice line by line

// 1.// q. write a function to give sum of sum(a)(b)(c)(d)() gives 10

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

sum(2)(5)();

// 2. write a function to sort an array of numbers without using js sort() method

function bubbleSort(arr) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([3, 1, 6, 5, 7, 8, 9, 4, 3, 5]);

//3.find the number in array using binary search

function binarySearch(arr, num) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);

    if (num > arr[middle]) {
      first = middle + 1;
    } else if (num < arr[middle]) {
      last = middle - 1;
    } else {
      return middle;
    }
  }
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);

//4.q. find the pair with given sum in an array
function findpairSum(arr, sum) {
  let pairs = {};
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (j = 1; j < sortedArr.length; j++) {
      if (sortedArr[i] + sortedArr[j] == sum) {
        pairs[sum] = [sortedArr[i], sortedArr[j]];
        return pairs;
      }
    }
  }
}

findpairSum([1, 2, 3, 4, 5, 6, 7, 8], 9);

// frequency counter pattern
//5. solve using frequency counter pattern
// given two strings   find whether they are anagram or not

// assume  all letters willl be lowercase   there'll be no space no special characters etc

function findAnagram(str1, str2) {
  let strObj1 = {};
  let strObj2 = {};

  if (str1.length != str2.length) return false;

  for (key of str1) {
    strObj1[key] = (strObj1[key] || 0) + 1;
  }
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

findAnagram("nigga", "gagil");

//6. find the min and the max numbers in an array
function findMinNmaxNum(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}
findMinNmaxNum([1, 4, 3, 5, 2, 6, 7, 3, 8]);









//7. problem two find unique numbers in an array
// assume array is sorted

function findUniqueNum(arr) {
  if (arr.length <= 0) return 0;
  console.log("array before sort", arr);
  // arr = bubbleSort(arr);

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  let arr2 = arr;
  arr = [];
  for (let l = 0; l <= i; i++) {
    arr.push(arr2[l]);
  }
  console.log("array here", arr);
  return arr;
}
let bubbleSort = function (arr) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

findUniqueNum([1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 8, 9, 10]);
findUniqueNum([3, 1, 6, 5, 7, 8, 9, 4, 3, 5]);

// 8.find total sum in an array
function findSum(arr) {
  let total = 0;
  for (a of arr) {
    total += a;
  }
  return total;
}
findSum([1, 2, 3]);



//9.create a pyramid
function pyramid(num) {
  for (let i = 1; i <= num; i++) {
    let s = "";
    for (j = 1; j <= 2 * num - 1; j++) {
      j > num + 1 - i && j < num - 1 + i ? (s += "*") : (s += " ");
    }
    console.log(s);
  }
}
pyramid(10);

//10. get max sum of 2 nearest numbers

function getMaxSum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
getMaxSum([2, 3, 5, 3, 5, 7, 4, 9, 3, 1, 4, 6], 2);

//11. reverse an array of numbers

const reverse = ([head, ...tail]) =>
  tail.length === 0 ? [head] : [...reverse(tail), head];

//2nd soln
function reverse(a) {
  if (!a.length) return a;
  return reverse(a.slice(1)).concat(a[0]);
  // return reverse(a.slice(1).concat(a[0]));
}

reverse([1, 2, 3, 4, 5, 6, 7]);


// Missing numbers

let arr=[1,2,3,5];
let N= arr.length;
function missNum(a,n){
   let total= Math.floor((n+1)*(n+2)/2);
    for(i=0;i<n;i++){
        total=total-a[i];
    }
        return total
}
console.log(missNum(arr,N))

// array shoritng...
const sort=(arr)=>{
  for(i=0;i<arr.length;i++){
      for(j=i+1;j<arr.length;j++){
          if(arr[i]>arr[j]){
              temp=arr[i];
              arr[i]=arr[j];
              arr[j]=temp;
          }
      }
  }
  return arr
  }
  console.log(sort([4, 32, 2, 5, 8,4,5,6,5]))