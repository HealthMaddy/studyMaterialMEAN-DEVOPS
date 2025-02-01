function sumAll(arr) {
  let temp = 0;
  for (let a of arr) {
    temp += a;
  }
  console.log("total here", temp);
  return temp;
}

sumAll([1, 2, 3, 4, 5, 6]);
//  total here 21
