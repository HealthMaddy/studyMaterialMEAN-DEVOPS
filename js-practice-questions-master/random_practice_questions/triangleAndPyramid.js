function generatePyramid(num) {
  let number = "";
  for (let i = 1; i <= num; i++) {
    console.log((number += "*"));
  }
}
generatePyramid(10); //creates triangle

function pyramid(n) {
  for (var i = 1; i <= n; i++) {
    var s = "";
    for (var j = 1; j <= 2 * n - 1; j++) {
      j >= n + 1 - i && j <= n - 1 + i ? (s += "*") : (s += " ");
    }
    console.log(s);
  }
}
pyramid(10);

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      j > n + 1 - i && j < n - 1 + i ? (s += "*") : (s += " ");
    }
    console.log(s);
  }
}
pyramid(10);
