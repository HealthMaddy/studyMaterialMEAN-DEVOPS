/*
Cycle In Graph
You're given a list of edges representing
an unweighted, directed graph with at least
one node. Write a function that returns a
boolean representing whether the given
graph contains a cycle.
For the purpose of this question, a cycle is
defined as any number of vertices, including
just one vertex, that are connected in a
closed chain. A cycle can also be defined as a
chain of at least one vertex in which the first
vertex is the same as the last.
The given list is what's called an adjacency
list, and it represents a graph. The number of
vertices in the graph is equal to the length of
edges , where each index i in edges
contains vertex i 's outbound edges, in no
particular order. Each individual edge is
represented by a positive integer that
denotes an index (a destination vertex) in the
list that this vertex is connected to. Note that
these edges are directed, meaning that you
can only travel from a particular vertex to its
destination, not the other way around
(unless the destination vertex itself has an
outbound edge to the original vertex).
Also note that this graph may contain selfloops. A self-loop is an edge that has the
same destination and origin; in other words,
it's an edge that connects a vertex to itself.
For the purpose of this question, a self-loop
is considered a cycle.
For a more detailed explanation, please refer
to the Conceptual Overview section of this
question's video explanation
Sample Input
edges = [
 [1, 3],
 [2, 3, 4],
 [0],
 [],
 [2, 5],
 [],
]
Sample Output
true
// There are multiple cycles in this graph:
// 1) 0 -> 1 -> 2 -> 0
// 2) 0 -> 1 -> 4 -> 2 -> 0
// 3) 1 -> 2 -> 0 -> 1
// These are just 3 examples; there are more.
*/

//SOLUTION 1
//TIME COMPLEXITY O(v + e) | SPACE COMPLEXITY O(v) -where v is the number of
// vertices and e is the number of edges in the graph
function cycleInGraph(edges) {
  const numeberOfNodes = edges.length;
  const visited = new Array(numeberOfNodes).fill(false);
  const currentlyInStack = new Array(numberOfNodes).fill(false);

  for (let node = 0; node < numeberOfNodes; node++) {
    if (visited[node]) continue;

    const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
    if (containsCycle) return true;
  }
  return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
  visited[node] = true;
  currentlyInStack[node] = true;
  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }

  currentlyInStack[node] = false;
  return false;
}

//SOLUTION 2
//TIME COMPLEXITY O(v + e) | SPACE COMPLEXITY O(v) -where v is the number of
// vertices and e is the number of edges in the graph

const [WHITE, GREY, BLACK] = [0, 1, 2];
function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
  const colors = new Array(numberOfNodes).fill(WHITE);

  for (let node = 0; node < numberOfNodes; node++) {
    if (colors[node] != WHITE) continue;

    const containsCycle = traverseAndColorNodes(node, edges, colors);
    if (containsCycle) return true;
  }

  return false;
  }

function traverseAndColorNodes(node, edges, colors) {
  colors[node] = GREY;
  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    const neighborColor = colors[neighbor];

    if (neighborColor === GREY) return true;
    if (neighborColor === BLACK) continue;

    const containsCycle = traverseAndColorNodes(neighbor, edges, colors);
    if (containsCycle) return true;
  }

  colors[node] = BLACK;
  return false;
}
