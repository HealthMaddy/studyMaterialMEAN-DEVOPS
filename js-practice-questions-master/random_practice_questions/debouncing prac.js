// in angular template use onKeyUp i.e keyup = "debounceImplementTionFunc()";
// interview que in flipkart
const getData = () => {
  // for eg it is calling api and getting search results
  let counter = 0;
  console.log("fetching data .....", counter++);
};

let debounce = function (fn, d = 300) {
  let timer;
  return function () {
    let context = this, // these things just to make sure we are using proper laxically scoped this var and proper arguments
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const debounceImplementTionFunc = debounce(getData);

let debounce2 = function (fn, delayTime) {
  let timer;
  let context = this;
  let args = arguments;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delayTime);
  };
};


// debounce with params 
/*


function simpleLogger(...param){
  console.log('executing logger....', param)
}


let debounce = function(fn, ...params){
let timer, context = this ,  args = arguments


return function(delay){
   clearTimeout(timer)
   
   timer = setTimeout(()=>{
       fn.apply(context , params)
   }, delay)
}
}

let debounceAfter2secs = debounce(simpleLogger ,  'sample param' , 123, true)

console.log(debounceAfter2secs(2000))

*/