class Node {
  // Your code here:
  constructor(value) {
    this.value = value;
    this.next = null;
    this.min = null;
  }
}

class MinStack {
  // Your code here:
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    const prevTop = this.top;
    this.top = newNode;
    this.top.next = prevTop;
    if (!prevTop) this.top.min = value;
    else if (value < prevTop.value) this.top.min = value;
    else this.top.min = prevTop.value;
  }

  pop() {
    const prevTopValue = this.top.value;
    this.top = this.top.next;
    return prevTopValue;
  }

  peek() {
    return this.top.value;
  }

  min() {
    // Complejidad o(n)
    // let minValue = Infinity;
    // let current = this.top;
    // while (current.next) {
    //   if (current.value < minValue) {
    //     minValue = current.value;
    //   }
    //   current = current.next;
    // }
    // return minValue;
    // Complejidad o(1)
    return this.top.min;
  }
}

const stack = new MinStack();
stack.push(5);
stack.push(6);

console.log(stack);
console.log(stack.pop());
console.log(stack);

stack.push(6);
stack.push(1);
stack.push(2);

console.log(stack.peek());

console.log(stack.min());

module.exports = {
  Node,
  MinStack,
};
