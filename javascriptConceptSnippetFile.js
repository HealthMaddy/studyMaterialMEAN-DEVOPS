 
 // 1.Function compositions 
 let add = (args) => args[0] + args[1]

 let square = (num)=> num**2
 let add1 = (num)=> num+1

function compose(fn1, fn2){
    return function(val1,val2){
        return fn1(fn2(val1,val2))
    }
}


const composeAll = (...fns)=> (...vals)=> fns.reduceRight((a,b)=> b(a), vals)
// const composition = compose(square, add)
const composition = composeAll(add1,square,add)
let getSquare4 = composition(2,2)


// 2.promisify any function using below code 

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}