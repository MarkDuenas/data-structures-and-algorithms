'use strict';

const Stack = require('../stacks.js');

describe('Stacks data structure', () => {

  let stack = new Stack();
  stack.push(111).push(222).push(333);

  it('should successfully push onto a stack', () => {
    expect(stack.top).toBe(333);
  });

  it('successfully push multiple values onto a stack', () => {
    expect(stack.storage.length).toBe(3);
  });

  it('should successfully pop off the stack', () => {
    stack.pop();
    expect(stack.storage.length).toBe(2);
  });

  it('should successfully peek the next item on the stack', () => {
    expect(stack.peek()).toBe(222);
  });

  it('should successfully empty a stack after multiple pops', () => {
    stack.pop().pop();
    expect(stack.top).toBe(null);
  });

  it('should successfully instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack.top).toBe(null);
  });

  it('calling pop or peek on empty stack raises exception', () => {
    expect(stack.pop()).toBe(null);
    expect(stack.peek()).toBe(null);
  });

});
