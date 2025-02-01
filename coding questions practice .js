let log = console.log;

function findMaxSum(arr, num) {
  if (!arr.length) return null;

  let tempSum = 0,
    maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

// log(findMaxSum([2, 3, 5, 3, 5, 7, 4, 9, 3, 1, 4, 6], 2))

//Question (easy)

/*
Binary Search
Write a function that takes in a sorted array of
integers as well as a target integer. The
function should use the Binary Search
algorithm to determine if the target integer is
contained in the array and should return its
index if it is, otherwise -1 .
Sample Input
array = [0, 1, 21, 33, 45, 45, 61]
    target = 33
Sample Output
3
*/

function binarySearch(arr, target) {
  if (!arr.length) return -1;

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

// log(binarySearch([2,3,4,5,6,7,8], 3))

//Question (easy)

/*
 Branch Sums
Write a function that takes in a Binary Tree
and returns a list of its branch sums ordered
from leftmost branch sum to rightmost
branch sum.
A branch sum is the sum of all values in a
Binary Tree branch. A Binary Tree branch is a
path of nodes in a tree that starts at the root
node and ends at any leaf node.
Each BinaryTree node has an integer
value , a left child node, and a right
child node. Children nodes can either be
BinaryTree nodes themselves or None /
null .
Sample Input
tree = 1
 / \
 2 3
 / \ / \
 4 5 6 7
 / \ /
 8 9 10
Sample Output
[15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumBranches(root) {
  let sumsArr = [];

  traverseTree(root, 0, arr);

  return sumsArr;
}

function traverseTree(node, sumValue, sumsArr) {
  if (!node) return;

  const currSum = node.value + sumValue;

  if (!node.left && !node.right) {
    sumsArr.push(currSum);
    return;
  }

  traverseTree(node.left, currSum, sumsArr);

  traverseTree(node.right, currSum, sumsArr);
}

//Question (easy)

/*
Bubble Sort
Write a function that takes in an array of
integers and returns a sorted version of that
array. Use the Bubble Sort algorithm to sort
the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

function bubbleSort(arr) {
  let swapped = false;
  let counter = 0;

  while (!swapped) {
    swapped = true;

    for (let i = 1; i < arr.length - counter; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = false;
        swap(i - 1, i, arr);
      }
    }
    counter++;
  }

  return arr;
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))

//Question (easy)

/*
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters
and a non-negative integer representing a
key, write a function that returns a new string
obtained by shifting every letter in the input
string by k positions in the alphabet, where k
is the key.
Note that letters should "wrap" around the
alphabet; in other words, the letter z shifted
by one returns the letter a .
Sample Input
string = "xyz"
key = 2
Sample Output
"zab"
*/

function cypherEncryptor(str, key) {
  let newPosition = key % 26;
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let charsArr = [];
  for (let c of str) {
    charsArr.push(alphabets[(alphabets.indexOf(c) + newPosition) % 26]);
  }

  return charsArr.join("");
}

// log(cypherEncryptor("xyz", 2))

//Question (easy)
/*
Class Photos
It's photo day at the local school, and you're
the photographer assigned to take class
photos. The class that you'll be
photographing has an even number of
students, and all these students are wearing
red or blue shirts. In fact, exactly half of the
class is wearing red shirts, and the other half
is wearing blue shirts. You're responsible for
arranging the students in two rows before
taking the photo. Each row should contain
the same number of the students and
should adhere to the following guidelines:
All students wearing red shirts must be
in the same row.

All students wearing blue shirts must
be in the same row.

Each student in the back row must be
strictly taller than the student directly
in front of them in the front row.

You're given two input arrays: one containing
the heights of all the students with red shirts
and another one containing the heights of all
the students with blue shirts. These arrays
will always have the same length, and each
height will be a positive integer. 

Write a
function that returns whether or not a class
photo that follows the stated guidelines can
be taken.

Note: you can assume that each class has at
least 2 students.

Sample Input
redShirtHeights = [5, 8, 1, 3, 4]
blueShirtHeights = [6, 9, 2, 4, 5]
Sample Output
true // Place all students with blue shirt in back row
*/

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let firstRowColor = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";

  for (let i = 0; i < redShirtHeights.length; i++) {
    let rsh = redShirtHeights[i];
    let bsh = blueShirtHeights[i];

    if (firstRowColor == "RED") {
      if (rsh >= bsh) {
        return false;
      }
    } else if (bsh >= rsh) {
      return false;
    }
    return true;
  }
}

// log(classPhotos( [5, 8,9, 1, 3, 4], [10,6, 7, 2, 4, 5]))

//Question (easy)

/*
Find Closest Value In BST
Write a function that takes in a Binary Search
Tree (BST) and a target integer value and
returns the closest value to that target value
contained in the BST.
You can assume that there will only be one
closest value.
Each BST node has an integer value , a
left child node, and a right child node. 
A node is said to be a valid BST node if and
only if it satisfies the BST property: its
value is strictly greater than the values of
every node to its left; its value is less than
or equal to the values of every node to its
right; and its children nodes are either valid
BST nodes themselves or None / null .
Sample Input
tree = 10
 / \
 5 15
 / \ / \
 2 5 13 22
 / \
1 14
target = 12
Sample Output
13
*/

function findCLosestValueInBst(tree, target) {
  return traversal(tree, target, tree.value);
}

function traversal(node, target, nodeValue) {
  if (node == null) return nodeValue;

  if (Math.abs(target - nodeValue) > Math.abs(target - node.value)) {
    nodeValue = node.value;
  }

  if (target < node.value) {
    return traversal(node.left, target, nodeValue);
  } else if (target > node.value) {
    return traversal(node.right, target, nodeValue);
  } else {
    return nodeValue;
  }
}

//Question (easy)

/*
Depth-first Search
You're given a Node class that has a name
and an array of optional children nodes.
When put together, nodes form an acyclic
tree-like structure.
Implement the depthFirstSearch
method on the Node class, which takes in an
empty array, traverses the tree using the
Depth-first Search approach (specifically
navigating the tree from left to right), stores
all of the nodes' names in the input array, and
returns it.

Sample Input
graph = A
 / | \
 B C D
 / \ / \
 E F G H
 / \ \
 I J K
Sample Output
Hints
Hint 1
["A", "B", "E", "F", "I", "J", "C"]
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  //SOLUTION 1
  // TIME COMPLEXITY O(v + e) | SPACE COMPLEXITY O(v)

  depthFirstSearch(array) {
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}

//Question (easy)

/*
Generate Document
You're given a string of available characters
and a string representing a document that
you need to generate. Write a function that
determines if you can generate the
document using the available characters. If
you can generate the document, your
function should return true ; otherwise, it
should return false .
You're only able to generate the document if
the frequency of unique characters in the
characters string is greater than or equal to
the frequency of unique characters in the
document string. For example, if you're given
characters = "abcabc" and
document = "aabbccc" you cannot
generate the document because you're
missing one c .
The document that you need to create may
contain any characters, including special
characters, capital letters, numbers, and
spaces.
Note: you can always generate the empty
string ( "" ).
Sample Input
characters = "Bste!hetsi ogEAxpelert"
document = "AlgoExpert is the Best"
Sample Output
true
*/

function documentGenerator(characters, document) {
  // if(document.length > characters.length) return false

  const characterMap = {};

  for (let c of characters) {
    characterMap[c] = (characterMap[c] || 0) + 1;
  }

  for (let c of document) {
    if (!characterMap[c]) return false;
    characterMap[c]--;
  }

  return true;
}

// log(documentGenerator("Bste !hetsi ogEAxpele rt","AlgoExpert is the Best!"))

//Question (easy)
/*
Minimum Waiting Time
You're given a non-empty array of positive
integers representing the amounts of time
that specific queries take to execute. Only
one query can be executed at a time, but the
queries can be executed in any order.
A query's waiting time is defined as the
amount of time that it must wait before its
execution starts. In other words, if a query is
executed second, then its waiting time is the
duration of the first query; if a query is
executed third, then its waiting time is the
sum of the durations of the first two queries.
Write a function that returns the minimum
amount of total waiting time for all of the
queries. For example, if you're given the
queries of durations [1, 4, 5] , then the
total waiting time if the queries were
executed in the order of [5, 1, 4] would
be (0) + (5) + (5 + 1) = 11 . The first
query of duration 5 would be executed
immediately, so its waiting time would be 0
, the second query of duration 1 would
have to wait 5 seconds (the duration of the
first query) to be executed, and the last
query would have to wait the duration of the
first two queries before being executed.
Note: you're allowed to mutate the input
array.
Sample Input
queries = [3, 2, 1, 2, 6]
Sample Output
17
*/

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);

    totalWaitingTime += duration * queriesLeft;
  }

  return totalWaitingTime;
}

// log(minimumWaitingTime([3,2,1,2,6]))

//Question (easy)
/*
Node Depths
The distance between a node in a Binary Tree
and the tree's root is called the node's depth.
Write a function that takes in a Binary Tree
and returns the sum of its nodes' depths.
Each BinaryTree node has an integer
value , a left child node, and a right
child node. Children nodes can either be
BinaryTree nodes themselves or None /
null .
Sample Input
tree = 1
 / \
 2 3
 / \ / \
 4 5 6 7
 / \
8 9
Sample Output

16
*/

function nodeDepth(node, depth = 0) {
  if (node == null) return null;

  return (
    depth + nodeDepth(node.left, depth + 1) + nodeDepth(node.right, depth + 1)
  );
}

//Question (easy)
/*Non-Constructible Change
Given an array of positive integers
representing the values of coins in your
possession, write a function that returns the
minimum amount of change (the minimum
sum of money) that you cannot create. The
given coins can have any positive integer
value and aren't necessarily unique (i.e., you
can have multiple coins of the same value).
For example, if you're given
coins = [1, 2, 5] , the minimum
amount of change that you can't create is 4
. If you're given no coins, the minimum
amount of change that you can't create is 1
.
Sample Input
coins = [5, 7, 1, 1, 2, 3, 22]
Sample Output
20
*/

function nonConstructibleChange(coinsArr) {
  coinsArr.sort((a, b) => a - b);
  let currentCoinChange = 0;

  for (let coin of coinsArr) {
    if (coin > currentCoinChange + 1) return currentCoinChange + 1;

    currentCoinChange += coin;
  }

  return currentCoinChange + 1;
}

// log(nonConstructibleChange( [5, 7, 1, 1, 2, 3, 22]))

//Question (easy)
/*
Nth Fibonacci
The Fibonacci sequence is defined as follows:
the first number of the sequence is 0 , the
second number is 1 , and the nth number is
the sum of the (n - 1)th and (n - 2)th numbers.
Write a function that takes in an integer n
and returns the nth Fibonacci number.
Important note: the Fibonacci sequence is
often defined with its first two numbers as
F0 = 0 and F1 = 1 . For the purpose of
this question, the first Fibonacci number is
F0 ; therefore, getNthFib(1) is equal to
F0 , getNthFib(2) is equal to F1 , etc..
Sample Input #1
n = 2
Sample Output #1
1 // 0, 1
Sample Input #2
n = 6
Sample Output #2
5 // 0, 1, 1, 2, 3, 5
*/

function fib(n) {
  let lastTwo = [0, 1];

  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
}

function getFibArr(num) {
  let fibArr = [];
  for (let i = 1; i <= num; i++) {
    fibArr.push(fib(i));
  }
  return fibArr;
}
// log(getFibArr(6))

// this is best solution
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums;
}
fib(4);

//Question (easy)
/*
Palindrome Check
Write a function that takes in a non-empty
string and that returns a boolean
representing whether the string is a
palindrome.
A palindrome is defined as a string that's
written the same forward and backward. Note
that single-character strings are palindromes.
Sample Input
string = "abcdcba"
Sample Output
true
*/

function checkPallindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) return false;

    left++;
    right--;
  }

  return true;
}

// log(checkPallindrome("abcdcba"))

//Question (easy)
/*
Product Sum
Write a function that takes in a "special"
array and returns its product sum.
A "special" array is a non-empty array that
contains either integers or other "special"
arrays. The product sum of a "special" array
is the sum of its elements, where "special"
arrays inside it are summed themselves and
then multiplied by their level of depth.
The depth of a "special" array is how far
nested it is. For instance, the depth of [] is
1 ; the depth of the inner array in [[]] is
2 ; the depth of the innermost array in
[[[]]] is 3 .
Therefore, the product sum of [x, y] is
x + y ; the product sum of [x, [y, z]]
is x + 2 * (y + z) ; the product sum of
[x, [y, [z]]] is x + 2 * (y + 3z) .
Sample Input
Sample Output
Hints
Hint 1
Hint 2
array = [5, 2, [7, -1], 3, [6,[-13,8],4]]
12 // calculated as: 5 + 2 + 2 *(7-1)+3+2*(6+3 *(-13 +8)+4)
*/

function productSum(arr, multiplier = 1) {
  let sum = 0;

  for (let num of arr) {
    if (Array.isArray(num)) {
      sum += productSum(num, multiplier + 1);
    } else {
      sum += num;
    }
  }

  return sum * multiplier;
}

// log(productSum([5, 2, [7, -1], 3, [6,[-13,8],4]]))

//Question (easy)
/*
Remove Duplicates From
Linked List
You're given the head of a Singly Linked List
whose nodes are in sorted order with respect
to their values. Write a function that returns a
modified version of the Linked List that
doesn't contain any nodes with duplicate
values. The Linked List should be modified in
place (i.e., you shouldn't create a brand new
list), and the modified Linked List should still
have its nodes sorted with respect to their
values.
Each LinkedList node has an integer
value as well as a next node pointing to
the next node in the list or to None / null
if it's the tail of the list.
Sample Input
linkedList = 1 -> 1 -> 3 -> 4 -> 4
Sample Output
1 -> 3 -> 4 -> 5 -> 6 // the head

*/

function removeDuplicates(node) {
  let currentNode = node;

  while (currentNode != null) {
    const nextNode = currentNode.next;

    while (nextNode != null && currentNode.value == nextNode.value) {
      nextNode = nextNode.next;
    }

    currentNode.next = nextNode.next;
    currentNode = nextNode;
  }

  return node;
}

//Question (easy)
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

function runLengthEncoding(str) {
  let encodedArr = [];
  let currLength = 1;

  for (let i = 1; i < str.length; i++) {
    const prevChar = str[i - 1];
    const currChar = str[i];

    if (currChar !== prevChar || currLength == 9) {
      encodedArr.push(currLength.toString());
      encodedArr.push(prevChar);

      currLength = 0;
    }
    currLength++;
  }

  encodedArr.push(currLength.toString());
  encodedArr.push(str[str.length - 1]);

  return encodedArr.join("");
}

// log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))

function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }

  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}

// log(longestPalindromicSubstring("abaxyzzyxf"))

//Question (easy)

/*
Validate Subsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a
subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in
the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence
of the array [1, 2, 3, 4] , and so do the numbers [2, 4] . Note that a single number in an array
and the array itself are both valid subsequences of the array.
Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
Sample Output
true
*/

function isValidSubsequence(arr, subArr) {
  if (!arr.length || !subArr.length) return;

  let i = 0,
    j = 0;
  for (; i < arr.length; i++) {
    if (j == subArr.length) break;
    if (arr[i] == subArr[j]) j++;
  }

  return j == subArr.length;
}

// log(isValidSubsequence([1, 3, 5, 7, 55, 33, 76], [3, 5, 7]));

//--------------------------------------------------from here let's practice medium level questions -------------------------------------------------

//Question (med)

/*
Array Of Products
Write a function that takes in a non-empty
array of integers and returns an array of the
same length, where each element in the
output array is equal to the product of every
other number in the input array.
In other words, the value at output[i] is
equal to the product of every number in the
input array other than input[i] .
Note that you're expected to solve this
problem without using division.
Sample Input
array = [5, 1, 4, 2]
Sample Output
[8, 40, 10, 20]

// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4
*/

function productsArr(arr) {
  let productsArr = [];
  let totalProduct = 1;
  for (let el of arr) {
    totalProduct *= el;
  }

  for (let el of arr) {
    productsArr.push(totalProduct / Math.abs(el));
  }

  return productsArr;
}

// log(productsArr([5, 1, 4, 2]))

//Question (med)

/*
Balanced Brackets
Write a function that takes in a string made up of brackets ( ( , [ , { , ) , ] , and } ) and
other optional characters. The function should return a boolean representing whether the string is
balanced with regards to brackets.
A string is said to be balanced if it has as many opening brackets of a certain type as it has closing
brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a
corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a
corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in
[(]) .
Sample Input
string = "([])(){}(())()()"
Sample Output
true // it's balanced
*/

function balanceBrackets(str) {
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let el of str) {
    if (Object.values(brackets).includes(el)) {
      stack.push(el);
    } else if (brackets.hasOwnProperty(el)) {
      if (!stack.length || brackets[el] != stack.pop()) {
        return false;
      }
    }
  }

  return stack.length == 0;
}

// log(balanceBrackets("([])(){}(())()()"));

//Question (med)

/*
Binary Tree Diameter
Write a function that takes in a Binary Tree
and returns its diameter. The diameter of a
binary tree is defined as the length of its
longest path, even if that path doesn't pass
through the root of the tree.
A path is a collection of connected nodes in a
tree, where no node is connected to more
than two other nodes. The length of a path is
the number of edges between the path's first
node and its last node.
Each BinaryTree node has an integer
value , a left child node, and a right
child node. Children nodes can either be
BinaryTree nodes themselves or None /
null .
Sample Input
tree = 1
 / \
 3 2
 / \
 7 4
 / \
 8 5
 / \
 9 6
Sample Output
6 // 9 -> 8 -> 7 -> 3 -> 4 -> 5 ->6
// There are 6 edges between the
// first node and the last node
// of this tree's longest path.
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (tree == null) {
    return new TreeInfo(0, 0);
  }

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );

  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
} // need to practice this one more

//Question (med)
/*
Breadth-first Search
You're given a Node class that has a name
and an array of optional children nodes.
When put together, nodes form an acyclic
tree-like structure.
Implement the breadthFirstSearch
method on the Node class, which takes in an
empty array, traverses the tree using the
Breadth-first Search approach (specifically
navigating the tree from left to right), stores
all of the nodes' names in the input array, and
returns it.
If you're unfamiliar with Breadth-first Search,
we recommend watching the Conceptual
Overview section of this question's video
explanation before starting to code.
Sample Input
graph = A
 / | \
 B C D
 / \ / \
 E F G H
 / \ \
 I J K
Sample Output

["A", "B", "C", "D", "E", "F", "G","H","I","J","K"]
*/

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(val) {
    this.children.push(new Node(val));
    return;
  }

  breadthFirstSearch(array) {
    const queue = [this];

    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

// code to reverse a singly linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      const nextNode = current.next; // Store the next node
      current.next = prev; // Reverse the pointer
      prev = current; // Move prev forward
      current = nextNode; // Move current forward
    }

    this.head = prev; // Update the head to the new start
  }

  // Print the list
  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Example usage
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Original List:");
list.print(); // Output: 1 -> 2 -> 3 -> 4

list.reverse();

console.log("Reversed List:");
list.print(); // Output: 4 -> 3 -> 2 -> 1

// paste back to geeks for geeks after interview
