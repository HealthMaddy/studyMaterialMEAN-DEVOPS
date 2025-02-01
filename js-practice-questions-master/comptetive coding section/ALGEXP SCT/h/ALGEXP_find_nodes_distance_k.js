/*
Find Nodes Distance K
You're given the root node of a Binary Tree, a target value of a node that's contained in the tree, and a
positive integer k . Write a function that returns the values of all the nodes that are exactly distance k
from the node with target value.
The distance between two nodes is defined as the number of edges that must be traversed to go from one
node to the other. For example, the distance between a node and its immediate left or right child is 1 .
The same holds in reverse: the distance between a node and its parent is 1 . In a tree of three nodes
where the root node has a left and right child, the left and right children are distance 2 from each other.
Each BinaryTree node has an integer value , a left child node, and a right child node. Children
nodes can either be BinaryTree nodes themselves or None / null .
Note that all BinaryTree node values will be unique, and your function can return the output values in
any order.
Sample Input
tree = 1
 / \
 2 3
 / \ \
 4 5 6
 / \
 7 8
target = 3
k = 2
Sample Output
[2, 7, 8] // These values could be ordered differently
*/

// Common code
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is the number of nodes in the tree;

function findNodesDistanceK(tree, target, k) {
  const nodesToParents = {};
  populateNodesToParents(tree, nodesToParents);
  const targetNode = getNodeFromValue(target, tree, nodesToParents);

  return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k);
}

function breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
  const queue = [[targetNode, 0]];
  const seen = new Set([targetNode.value]);
  while (queue.length > 0) {
    const [currentNode, distanceFromTarget] = queue.shift();
    if (distanceFromTarget === k) {
      const nodesDistanceK = queue.map((pair) => pair[0].value);
      nodesDistanceK.push(currentNode.value);
      return nodesDistanceK;
    }

    const connectedNodes = [
      currentNode.left,
      currentNode.right,
      nodesToParents[currentNode.value],
    ];
    for (const node of connectedNodes) {
      if (node === null) continue;

      if (seen.has(node.value)) continue;

      seen.add(node.value);
      queue.push([node, distanceFromTarget + 1]);
    }
  }
  return [];
}

function getNodeFromValue(value, tree, nodesToParents) {
  if (tree.value === value) return tree;

  const nodeParent = nodesToParents[value];
  if (nodeParent.left !== null && nodeParent.left.value === value)
    return nodeParent.left;

  return nodeParent.right;
}

function populateNodesToParents(node, nodesToParents, parent = null) {
  if (node !== null) {
    nodesToParents[node.value] = parent;
    populateNodesToParents(node.left, nodesToParents, node);
    populateNodesToParents(node.right, nodesToParents, node);
  }
}

//SOLUTION 2
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - where n is the number of nodes in the tree;
function findNodesDistanceK(tree, target, k) {
  const nodesDistanceK = [];
  findDistanceFromNodeToTarget(tree, target, k, nodesDistanceK);
  return nodesDistanceK;
}

function findDistanceFromNodeToTarget(node, target, k, nodesDistanceK) {
  if (node === null) return -1;

  if (node.value === target) {
    addSubtreeNodeAtDistanceK(node, 0, k, nodesDistanceK);
    return 1;
  }

  const leftDistance = findDistanceFromNodeToTarget(
    node.left,
    target,
    k,
    nodesDistanceK
  );
  const rightDistance = findDistanceFromNodeToTarget(
    node.right,
    target,
    k,
    nodesDistanceK
  );

  if (leftDistance === k || rightDistance === k)
    nodesDistanceK.push(node.value);

  if (leftDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.right, leftDistance + 1, k, nodesDistanceK);
    return leftDistance + 1;
  }

  if (rightDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.left, rightDistance + 1, k, nodesDistanceK);
    return rightDistance + 1;
  }

  return -1;
}

function addSubtreeNodeAtDistanceK(node, distance, k, nodesDistanceK) {
  if (node === null) return;

  if (distance === k) nodesDistanceK.push(node.value);
  else {
    addSubtreeNodeAtDistanceK(node.left, distance + 1, k, nodesDistanceK);
    addSubtreeNodeAtDistanceK(node.right, distance + 1, k, nodesDistanceK);
  }
}
