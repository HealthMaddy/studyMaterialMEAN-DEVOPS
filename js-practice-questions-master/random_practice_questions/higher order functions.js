//forEach
//filter
//map
//sort
//reduce

//----------------------
const companies = [
  { name: "comp1", category: "finance", start: 1998, end: 2003 },
  { name: "comp2", category: "shop", start: 1981, end: 1997 },
  { name: "comp3", category: "auto", start: 1987, end: 1992 },
  { name: "comp4", category: "general", start: 1996, end: 2003 },
  { name: "comp5", category: "medical", start: 1991, end: 2001 },
  { name: "comp6", category: "decimal", start: 1992, end: 2000 },
  { name: "comp7", category: "farm", start: 1996, end: 2009 },
  { name: "comp8", category: "juice corner", start: 1991, end: 2004 },
  { name: "comp9", category: "retail", start: 1988, end: 1999 },
];
const ages = [12, 33, 13, 5, 3, 65, 23, 35, 11, 35, 64, 76, 22, 43, 15];

// for each -- eg // takes a callback fn u can pass value|index|array
companies.forEach(function (el) {
  console.log(el.name);
});

//--------------------
//filter takes a callback function
let newSampleArr = []
const canDrink = ages.filter(function(el){
  if(el>=21) newSampleArr.push(el)
})

console.log(newSampleArr)

//-------------------------
//map takes a callback function
let newDataSetArr = companies.map(el=>el.end).map(el =>Math.floor(Math.sqrt(el)))
console.log(newDataSetArr)

//--------------------------
//sort takes accumulator and current value

let sortedArr = companies.sort((a,b)=>(a.end>b.end?1:-1));
let sortedArr = companies.map(el=>el.end).sort((a,b)=>(-a+b));
let sortedArr = companies.sort((a,b)=>(-a.end+b.end));
console.log(sortedArr)

//reduce it takes total ,current index and position to start from
let sumAges = ages.reduce((prev, cur) => {
  return prev + cur;
}, 0);
let sumAges = ages.reduce((prev, cur) => prev + cur, 0);
let sumCompanies = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(sumCompanies);
