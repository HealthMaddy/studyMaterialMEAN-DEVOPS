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
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}
function findClosestValueInBst(tree, target) {
  return traversedVal(tree, target, tree.value);
}

//SOLUTION 1 :Iterative
//Average: TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(1)
//Worst: TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)

function traversedVal(tree, target, value) {
  let current = tree;
  while (current !== null) {
    if (Math.abs(target - value) > Math.abs(target - current.value)) {
      value = current.value;
    }

    if (target < current.value) {
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    } else {
      break;
    }
  }
  return value;
}

//SOLUTION 2 :Recursive
//Average: TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(log(n))
//Worst: TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function traversedVal(tree, target, value) {
  if (tree === null) return value;
  if (Math.abs(target - value) > Math.abs(target - tree.value)) {
    value = tree.value;
  }

  if (target < tree.value) {
    return traversedVal(tree.left, target, value);
  } else if (target > tree.value) {
    return traversedVal(tree.right, target, value);
  } else {
    return value;
  }
}
