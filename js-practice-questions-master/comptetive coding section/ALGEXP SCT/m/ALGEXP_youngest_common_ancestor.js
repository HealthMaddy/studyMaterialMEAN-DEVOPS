/*
Youngest Common
Ancestor
You're given three inputs, all of which are
instances of an AncestralTree class that
have an ancestor property pointing to
their youngest ancestor. The first input is the
top ancestor in an ancestral tree (i.e., the
only instance that has no ancestor--its
ancestor property points to None /
null ), and the other two inputs are
descendants in the ancestral tree.
Write a function that returns the youngest
common ancestor to the two descendants.
Note that a descendant is considered its own
ancestor. So in the simple ancestral tree
below, the youngest common ancestor to
nodes A and B is node A.
Sample Input
// The youngest common ancestor to nodes A and B is node A.
 A
 /
B
// The nodes are from the ancestral tree below.
topAncestor = node A
descendantOne = node E
descendantTwo = node I
 A
 / \
 B C
 / \ / \
 D E F G
 / \
H I
Sample Output
node B
*/

//SOLUTION 1
// TIME COMPLEXITY O(d) | SPACE COMPLEXITY O(1) - where d is the depth (height) of the ancestral tree;
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant !== topAncestor) {
    descendant = descendant.ancestor;
    depth++;
  }
  return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }

  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
}
