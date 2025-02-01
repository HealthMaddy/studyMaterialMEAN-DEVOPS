/*
Reconstruct BST
The pre-order traversal of a Binary Tree is a
traversal technique that starts at the tree's
root node and visits nodes in the following
order:
1. Current node
2. Left subtree
3. Right subtree
Given a non-empty array of integers
representing the pre-order traversal of a
Binary Search Tree (BST), write a function that
creates the relevant BST and returns its root
node.
The input array will contain the values of BST
nodes in the order in which these nodes
would be visited with a pre-order traversal.
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
preOrderTraversalValues = [10, 4]
Sample Output
10
 / \
4 17
 / \ \
 2 5 19
 / /
1 18 
*/

// common code
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//SOLUTION 1
//TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n) - where n is the length of the array

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null;
  const currentValue = preOrderTraversalValues[0];
  const rightSubtreeRootIdx = preOrderTraversalValues.length;
  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const value = preOrderTraversalValues[i];
    if (value >= currentValue) {
      rightSubtreeRootIdx = value;
      break;
    }
  }
  const leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  const rightSubtree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeRootIdx)
  );

  return new BST(currentValue, leftSubtree, rightSubtree);
}

//SOLUTION 2
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is the length of the array
class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) {
  if (preOrderTraversalValues.length === currentSubtreeInfo.rootIdx)
    return null;

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;
  currentSubtreeInfo.rootIdx++;

  const leftSubtree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  const rightSubtree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  return new BST(rootValue, leftSubtree, rightSubtree);
}
