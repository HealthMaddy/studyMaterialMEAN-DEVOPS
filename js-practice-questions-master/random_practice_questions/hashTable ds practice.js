const mathFunctionChecker = [1, 23, 433, 12, 4323, 76];
class HashTable {
  constructor(size = 25) {
    this.keyMapper = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      console.log("character=", char);
      let value = char.charCodeAt(0) - 96;
      console.log("value arscii =", value);
      console.log("key mapper length", this.keyMapper.length);
      // here we are subtracting from 96 to get the exact
      //    arscii value of that particular number
      total = (total * weird_prime + value) % this.keyMapper.length;
    }
    console.log(22 % 17);
    console.log("total in hash function", total);
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMapper[index]) {
      this.keyMapper[index] = [];
    }
    this.keyMapper[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMapper[index]) {
      for (let i = 0; i < this.keyMapper[index].lenght; i++) {
        if (this.keyMapper[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
      return "no keys there";
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMapper.length; i++) {
      if (this.keyMapper[i]) {
        for (let j = 0; j < this.keyMapper[i].lenght; j++) {
          if (!keysArr.includes(this.keyMapper[i][j][0]))
            keysArr.push(this.keyMapper[i][j][0]);
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMapper.length; i++) {
      if (this.keyMapper[i]) {
        for (var j = 0; j < this.keyMapper.length(); j++) {
          if (!valuesArr.includes(this.keyMapper[i][j][1])) {
            valuesArr.push(this.keyMapper[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
// ht.keys().forEach(function (key) {
//   console.log("get key caller", ht.get(key));
// });
console.log("specific position", ht.get("lightcoral"));
