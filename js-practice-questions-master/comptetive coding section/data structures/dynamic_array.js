// not solved yet
// giving 3,7
// expected 7,3
// https://www.hackerrank.com/challenges/dynamic-array/problem

function processData(input) {
  //Enter your code here
  const S = [];
  let lastAnswer = 0;
  const inputArray = input.split("\n");
  console.log("input array here", inputArray, "end log");
  const N = inputArray[0].split(" ")[0];

  for (let i = 0; i < N; i++) {
    S[i] = [];
  }

  inputArray.slice(1).forEach((el) => {
    const [q, x, y] = el.split(" ").map(Number);
    const seq = (x ^ lastAnswer) % N;

    switch (q) {
      case 1:
        S[seq].push(y);
        break;
      case 2:
        const size = S[seq].length;
        const index = y % size;
        lastAnswer = S[seq][index];
        console.log(lastAnswer);
        break;
    }
  });

  return S;
}

const input = `2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1`;

console.log(processData(input));
