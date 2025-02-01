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

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// SOLUTION 1
//Average case: when the tree is balanced
//  TIME COMPLEXITY O(n) |  SPACE COMPLEXITY O(h) - where n is the number of nodes in
// the binary tree and h is the height of the binary tree

function nodeDepth(root, depth = 0) {
  if (root === null) return 0;
  return depth + nodeDepth(root.left, depth + 1) + nodeDepth(root.right, depth);
}

// SOLUTION 2
//Average case: when the tree is balanced
//  TIME COMPLEXITY O(n) |  SPACE COMPLEXITY O(h) - where n is the number of nodes in
// the binary tree and h is the height of the binary tree

function nodeDepth(root) {
  let totalSum = 0;
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    totalSum += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return totalSum;
}
