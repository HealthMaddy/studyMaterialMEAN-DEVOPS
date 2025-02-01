class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) return (this.adjecencyList[vertex] = []);
  }

  addEdgeConn(vertex1, vertex2) {
    this.adjecencyList[v1].push(v2);
    this.adjecencyList[v1].push(v1);
  }

  removeEdgeConn(v1, v2) {
    this.adjecencyList[v1] = this.adjecencyList[v1].filter((el) => el !== v2);
    this.adjecencyList[v2] = this.adjecencyList[v2].filter((el) => el !== v1);
  }

  removeVertex(vertex) {
    while (this.adjecencyList[vertex].length) {
      const vertexConn = this.adjecencyList[vertex].pop();
      this.removeEdgeConn(vertex, vertexConn);
    }
    delete this.adjecencyList[vertex];
  }
  // traversal types in graph
  //1. depth first  2. breadth first

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjecencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  depthFirstRecursive(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let vertexCurr;
    const adjacency = this.adjecencyList(function dfs(vertex) {
      if (!vertex) return null;
      visited[start] = true;
      result.push(vertexCurr);
      adjecencyList[vertexCurr].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);
  }

  breadthFirstSearch(start) {
    let queue = [start];
    let result = [];
    let visitedNode = {};
    let currInd;

    visitedNode[start] = true;

    if (queue.length) {
      currInd = queue.shift();
      result.push(currInd);
      this.adjecencyList[currInd].forEach((neighbour) => {
        if (!visitedNode[neighbour]) {
          visitedNode[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
