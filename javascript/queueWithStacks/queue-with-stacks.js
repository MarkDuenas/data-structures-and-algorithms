'use strict';

const Stack = require('./stacks.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while(this.stack1.storage.length !== 0) {
      let item = this.stack1.pop();
      this.stack2.push(item);
    }

    this.stack1.push(value);

    while(this.stack2.storage.length !== 0) {
      let item = this.stack2.pop();
      this.stack1.push(item);
    }
    return this;
  }

  dequeue() {
    if(this.stack1.top === null){
      return null;
    }
    let item = this.stack1.pop();
    return item;
  }

}

module.exports = PseudoQueue;
