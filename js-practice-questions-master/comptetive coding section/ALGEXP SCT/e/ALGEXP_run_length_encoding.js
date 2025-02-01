/*
Run-Length Encoding
Write a function that takes in a non-empty
string and returns its run-length encoding.
From Wikipedia, "run-length encoding is a
form of lossless data compression in which
runs of data are stored as a single data value
and count, rather than as the original run."
For this problem, a run of data is any
sequence of consecutive, identical
characters. So the run "AAA" would be
run-length-encoded as "3A" .
To make things more complicated, however,
the input string can contain all sorts of
special characters, including numbers. And
since encoded data must be decodable, this
means that we can't naively run-lengthencode long runs. For example, the run
"AAAAAAAAAAAA" (12 A s), can't naively
be encoded as "12A" , since this string can
be decoded as either "AAAAAAAAAAAA" or
"1AA" . Thus, long runs (runs of 10 or more
characters) should be encoded in a split
fashion; the aforementioned run should be
encoded as "9A3A" .
Sample Input
string = "AAAAAAAAAAAAABBCCCCDD"
Sample Output
"9A4A2B4C2D"

*/

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is thew lengt of the input string

function runLengthEncoding(string) {
  // the input string is guaranteed to be non empty,
  // so our first length will be at least length 1
  const endodedArr = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const prevChar = string[i - 1];
    const currChar = string[i];

    if (currChar !== prevChar || currentRunLength === 9) {
      endodedArr.push(currentRunLength.toString());
      encodedArr.push(prevChar);
      currentRunLength = 0;
    }

    currentRunLength++;
  }

  endodedArr.push(currentRunLength.toString());
  encodedArr.push(string[string.length - 1]);

  return encodedArr.join("");
}
