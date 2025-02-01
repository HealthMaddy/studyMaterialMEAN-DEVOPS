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
If you're unfamiliar with Depth-first Search,
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
