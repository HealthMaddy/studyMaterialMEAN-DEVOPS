/*
Find Successor
Write a function that takes in a Binary Tree
(where nodes have an additional pointer to
their parent node) as well as a node
contained in that tree and returns the given
node's successor.
A node's successor is the next node to be
visited (immediately after the given node)
when traversing its tree using the in-order
tree-traversal technique. A node has no
successor if it's the last node to be visited in
the in-order traversal.
If a node has no successor, your function
should return None / null .
Each BinaryTree node has an integer
value , a parent node, a left child
node, and a right child node. Children
nodes can either be BinaryTree nodes
themselves or None / null .
Sample Input
tree =
 1
 / \
 2 3
 / \
 4 5
 /
 6
node = 5
Sample Output
1
// This tree's in-order traversal order is:
//6-> 4-> 2->5-> 1-> 3
// 1 comes immediately after 5.
*/

class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
//  - where n is the number of nodes in the tree

function findSuccesor(tree,node){
    const inOrderTraversalOrder = getInOrderTraversalValue(tree);

    for(let i = 0;i<inOrderTraversalOrder.length;i++){
        const currentNode = inOrderTraversalOrder[i];
        if(currentNode !== node) continue;
        if(i ===inOrderTraversalOrder.length -1) return null;
        return inOrderTraversalOrder[i+1]
    }
}

function getInOrderTraversalValue(node,order=[]){
    if(node === null) return order;
    getInOrderTraversalValue(node.left,order);
    order.push(node)
    getInOrderTraversalValue(node.right,order);
    return order;
}

//SOLUTION 2
//TIME COMPLEXITY O(h) | SPACE COMPLEXITY O(1)
//  - where h is the hight of the tree 
function findSuccesor(tree, node){
    if(node.right != null) return getLeftMostChild(node.right)
    return getRightMostParent(node)
}

function getLeftMostChild(node){
    const currentNode = node;
    while(currentNode.left !== null){
        currentNode =  currentNode.left
    }
    return currentNode;
}

function getRightMostParent(node){
    let currentNode =  node;
    while(currentNode.parent !== null && currentNode.parent.right === currentNode){
        currentNode =  currentNode.parent
    }
    return currentNode.parent;
}

