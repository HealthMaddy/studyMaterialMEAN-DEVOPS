/*
Invert Binary Tree
Write a function that takes in a Binary Tree
and inverts it. In other words, the function
should swap every left node in the tree for its
corresponding right node.
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
 1
 / \
 3 2
 / \ / \
7 6 5 4
 / \
 9 8
*/

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;

    swapRightAndLeft(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

//SOLUTION 2
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(d)
function invertBinaryTree(tree) {
  if (tree === null) return;
  swapRightAndLeft(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

// common code
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function swapRightAndLeft(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
