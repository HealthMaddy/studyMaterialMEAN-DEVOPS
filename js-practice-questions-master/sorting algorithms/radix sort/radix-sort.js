/*
1.In order to implement radix sort , it's helpful to build a few helper functions first:

1.getDigit(num,place) -returns the digit in num at the given place value
2.digitCount(num) -returns the number of digits in num
*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
/*
explanation:

step 1:7327/100
step 2:73.27
step 3: after Math.floor => 73
step 4:73 % 10 (% to get remainder)
step 5:3   final answer
*/
getDigit(7327, 2);

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
/*
explanation:

step 1:Math.log10(2344)  means 10 to what powe gives 2344
step 2:  => 3.369957607346053   then Math.floor() gives 3
step 3: 3 +1 =>  4 final answer
step 4: special case if we pass 0 to math.log10() it  gives -infinity so if case is implemented
*/
// digitCount(2344);

// to track max digits in array of nums

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// mostDigits([1, 232, 3433, 432, 22, 52322, 532]);

/*
1.Define a function that accept a list of numbers
2.Figure out how many digits the largest number has
3.Loop from k=0 up to this largest number of digits
4.for each iteration of the loop:
    1.create bucket for each digit (0 to 9)
    2.place each number in the corresponding bucket based on its kth digit
5.replace our existing array with values in our buckets,
  starting with 0 and going upto 9
6.return list at the end

[note: buckets here we are assuming as empty arrays ]
*/

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // gives us array of 10 sub arrays
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

radixSort([1, 232, 3433, 432, 22, 52322, 532]);
