/*
Linked List Construction
Write a DoublyLinkedList class that has a head and a tail , both of which point to either
a linked list Node or None / null . The class should support:
Setting the head and tail of the linked list.
Inserting nodes before and after other nodes as well as at given positions (the position of
the head node is 1 ).
Removing given nodes and removing nodes with given values.
Searching for nodes with given values.
Note that the setHead , setTail , insertBefore , insertAfter , insertAtPosition ,
and remove methods all take in actual Node s as input parameters—not integers (except for
insertAtPosition , which also takes in an integer representing the position); this means that
you don't need to create any new Node s in these methods. The input nodes can be either standalone nodes or nodes that are already in the linked list. If they're nodes that are already in the
linked list, the methods will effectively be moving the nodes within the linked list. You won't be
told if the input nodes are already in the linked list, so your code will have to defensively handle
this scenario.
If you're doing this problem in an untyped language like Python or JavaScript, you may want to
look at the various function signatures in a typed language like Java or TypeScript to get a better
idea of what each input parameter is.
Each Node has an integer value as well as a prev node and a next node, both of which
can point to either another node or None / null .
Sample Usage
// Assume the following linked list has already been created:
1 <-> 2 <-> 3 <-> 4 <-> 5
// Assume that we also have the following stand-alone nodes:
3, 3, 6
setHead(4): 4 <-> 1 <-> 2 <-> 3 <-> 5 // set the existing node with value 4 as the head
setTail(6): 4 <-> 1 <-> 2 <-> 3 <-> 5 <-> 6 // set the stand-alone node with value 6 as the tail
insertBefore(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 // move the existing node with value 3 before the existing node with value 6
insertAfter(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a stand-alone node with value 3 after the existing node with value 6
insertAtPosition(1, 3): 3 <-> 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a stand-alone node with value 3 in position 1
removeNodesWithValue(3): 4 <-> 1 <-> 2 <-> 5 <-> 6 // remove all nodes with value 3
remove(2): 4 <-> 1 <-> 5 <-> 6 // remove the existing node with value 2
containsNodeWithValue(5): true 
*/

//SOLUTION 1

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  //TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  //TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  //TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  //TIME COMPLEXITY O(p) | SPACE COMPLEXITY O(1)
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  //TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  //TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  //TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
