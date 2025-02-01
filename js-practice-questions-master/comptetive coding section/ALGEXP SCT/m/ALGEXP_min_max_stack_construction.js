/*
Min Max Stack Construction
Write a MinMaxStack class for a Min Max Stack. The class should
support:
Pushing and popping values on and off the stack.
Peeking at the value at the top of the stack.
Getting both the minimum and the maximum values in the stack at
any given point in time.
All class methods, when considered independently, should run in
constant time and with constant space.
Sample Usage
// All operations below are performed sequentially.
MinMaxStack(): - // instantiate a MinMaxStack
push(5): -
getMin(): 5
getMax(): 5
peek(): 5
push(7): -
getMin(): 5
getMax(): 7
peek(): 7
push(2): -
getMin(): 2
getMax(): 7
peek(): 2
pop(): 2
pop(): 7
getMin(): 5
getMax(): 5
peek(): 5
*/

//SOLUTION 1
class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  // TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  // TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }

    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  // TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }
  
  // TIME COMPLEXITY O(1) | SPACE COMPLEXITY O(1)
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
