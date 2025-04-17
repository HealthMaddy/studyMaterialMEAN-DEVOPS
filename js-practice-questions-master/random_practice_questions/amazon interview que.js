// q. write a function to give sum of sum(a)(b)(c)(d)() gives 10

//1. write a function which takes arguement a

let sum = function (a) {
  //2. write another function which takes an arguement b and return it
  return function (b) {
    //3. now return the recursive sum of arguements i.e a+b
    //4. use some base case to stop infinite loop
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

// es6 way 
// let sum = a=>b=>b?sum(a+b):a;

console.log("sum here is", sum(1)(3)());


//1. create a function expression that accepts arguement a
let sum = function(a){
  
  // 2. return a function that accepts an arguement b

  return function(b){
    
    // 3. check if arguement b is passed or not
    if(b){
      return a+b
    }
    return a
    //4. if b is passed return sum else return a
  }
}

// remove consecutive duplicates 

input  = ['Jaydeep', 'Jaydeep', 'Jaydeep' ,'Jaydeep', 'chouhan' ,'Jaydeep', 'chouhan']

output = ['Jaydeep', 'chouhan' ,'Jaydeep', 'chouhan']


let index = 0;
for(let i=1; i<input.length; i++) {
    if(input[index]==input[i]) continue;
    else {
        input[index+1] = input[i];
        index++;
    }
}
console.log(input.slice(0, index+1));