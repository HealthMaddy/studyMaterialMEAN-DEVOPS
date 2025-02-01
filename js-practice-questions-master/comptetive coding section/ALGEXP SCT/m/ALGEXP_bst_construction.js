/*
BST Construction
Write a BST class for a Binary Search Tree.
The class should support:
Inserting values with the insert
method.
Removing values with the remove
method; this method should only
remove the first instance of a given
value.
Searching for values with the
contains method.
Note that you can't remove values from a
single-node tree. In other words, calling the
remove method on a single-node tree
should simply not do anything.
Each BST node has an integer value , a
left child node, and a right child node.
A node is said to be a valid BST node if and
only if it satisfies the BST property: its
value is strictly greater than the values of
every node to its left; its value is less than
or equal to the values of every node to its
right; and its children nodes are either valid
BST nodes themselves or None / null .

// Assume the following BST has already been created
 10
 / \
 5 15
 / \ / \
 2 5 13 22
 / \
1 14
// All operations below are performed sequentially
insert(12): 10
 / \
 5 15
 / \ / \
 2 5 13 22
 / / \
 1 12 14
remove(10): 12
 / \
 5 15
 / \ / \
 2 5 13 22
 / \
 1 14
contains(15): true
*/

// SOLUTION 1
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  //AVERAGE CASE -TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(log(n))
  //WORST CASE -TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  //AVERAGE CASE -TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(log(n))
  //WORST CASE -TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }

  //AVERAGE CASE -TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(log(n))
  //WORST CASE -TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n)
  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        return this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        return this.right.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.left = this.left.left;
          this.right = this.left.right;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // do nothing
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
    }

    return this;
  }

  // helper function
  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

// SOLUTION 2
class BST {
  construction(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  //AVERAGE CASE -TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(1)
  //WORST CASE -TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)
  insert(value) {
    let curentNode = this;
    while (true) {
      if (value < curentNode.value) {
        if (curentNode.left === null) {
          curentNode.left = new BST(value);
          break;
        } else {
          curentNode = curentNode.left;
        }
      } else {
        if (curentNode.right === null) {
          curentNode.right = new BST(value);
          break;
        } else {
          curentNode = curentNode.right;
        }
      }
    }
    return this;
  }

  //AVERAGE CASE -TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(1)
  //WORST CASE -TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)
  contains(value) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  //AVERAGE CASE -TIME COMPLEXITY O(log(n)) | SPACE COMPLEXITY O(1)
  //WORST CASE -TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(1)
  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.left = currentNode.left.left;
            currentNode.right = currentNode.left.right;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // this is a single node tree; do nothing
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }

    return this;
  }

  // helper function
  getMinValue() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
