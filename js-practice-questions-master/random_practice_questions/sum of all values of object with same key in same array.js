//if same key in array of objects then sum all its values

//  let sizeStock = stockDetails.reduce((a, c) => {
//         if (a.hasOwnProperty(c.size)) {
//           a[c.size].quantity += c.quantity;
//         } else {
//           a[c.size] = c;
//         }
//         return a;
//       }, {});
//       stockDetails = Object.values(sizeStock);

// need to practice

let stock = [
  { size: "L", quantity: 12 },
  { size: "M", quantity: 1 }, //{L:{size: "L", quantity: 12},M:{ size: "M", quantity: 1 }} previous
  { size: "M", quantity: 11 }, // { size: "M", quantity: 11 }  current
  { size: "M", quantity: 14 },
  { size: "M", quantity: 15 },
  { size: "M", quantity: 16 },
  { size: "M", quantity: 2 },
  { size: "L", quantity: 3 },
  { size: "L", quantity: 4 },
  { size: "L", quantity: 6 },
  { size: "L", quantity: 9 },
  { size: "L", quantity: 10 },
];

let stockSum = stock.reduce((prev, current) => {
  if (prev.hasOwnProperty(current.size)) {
    // console.log("prev el here",prev)
    // console.log("curr el here",current)
    prev[current.size].quantity =
      prev[current.size].quantity + current.quantity;

    //explanation
    // {L:{ size: "L", quantity: 12 },M:{ size: "M", quantity: 1 }}  = (M.quantity i.e 1) + ({ size: "M", quantity: 11 } i.e 11) => 12
    //  prev one complete object             curr el position         prev at current pos     current pos
  } else {
    prev[current.size] = current;

    // explanation
    //{L:{ size: "L", quantity: 12 },M:{ size: "M", quantity: 1 }}

    // {M:{ size: "M", quantity: 1 }} =  { size: "M", quantity: 11 }
    // prev element at current pos  =       el at current position
  }

  return prev;
  // { L: { size: 'L', quantity: 12 } }
  // { L: { size: 'L', quantity: 12 }, M: { size: 'M', quantity: 1 } }
  // { L: { size: 'L', quantity: 12 }, M: { size: 'M', quantity: 12 } }
  // { L: { size: 'L', quantity: 12 }, M: { size: 'M', quantity: 26 } }
  // { L: { size: 'L', quantity: 12 }, M: { size: 'M', quantity: 41 } }
  // { L: { size: 'L', quantity: 12 }, M: { size: 'M', quantity: 57 } }
  // { L: { size: 'L', quantity: 12 }, M: { size: 'M', quantity: 59 } }
  // { L: { size: 'L', quantity: 15 }, M: { size: 'M', quantity: 59 } }
  // { L: { size: 'L', quantity: 19 }, M: { size: 'M', quantity: 59 } }
  // { L: { size: 'L', quantity: 25 }, M: { size: 'M', quantity: 59 } }
  // { L: { size: 'L', quantity: 34 }, M: { size: 'M', quantity: 59 } }
  // { L: { size: 'L', quantity: 44 }, M: { size: 'M', quantity: 59 } }
}, {});

let final = stockSum;

// { L: { size: 'L', quantity: 44 }, M: { size: 'M', quantity: 59 } } final output after getting out of that block
console.log("reduce function prev", final);
