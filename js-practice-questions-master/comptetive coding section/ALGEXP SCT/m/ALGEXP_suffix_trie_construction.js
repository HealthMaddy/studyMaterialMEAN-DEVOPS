/*
Suffix Trie Construction
Write a SuffixTrie class for a Suffix-Trie-like data structure. The class should have a root
property set to be the root node of the trie and should support:
Creating the trie from a string; this will be done by calling the populateSuffixTrieFrom
method upon class instantiation, which should populate the root of the class.
Searching for strings in the trie.
Note that every string added to the trie should end with the special endSymbol character: "*" .
If you're unfamiliar with Suffix Tries, we recommend watching the Conceptual Overview section of
this question's video explanation before starting to code.
Sample Input (for creation)
string = "babc"
Sample Output (for creation)
The structure below is the root of the trie.
{
 "c": {"*": true},
 "b": {
 "c": {"*": true},
 "a": {"b": {"c": {"*": true}}},
 },
 "a": {"b": {"c": {"*": true}}},
}
Sample Input (for searching in the suffix trie above)
string = "abc"
Sample Output (for searching in the suffix trie above)
true
*/

//SOLUTION 1

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n^2)
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];

      if (!(letter in node)) node[letter] = {};

      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  // TIME COMPLEXITY O(m) | SPACE COMPLEXITY O(1)
  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return this.endSymbol in node;
  }
}
