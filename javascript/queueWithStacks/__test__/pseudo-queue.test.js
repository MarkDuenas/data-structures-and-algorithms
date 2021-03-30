'use strict';

const Queue = require('../queue-with-stacks.js');

describe('Queue with 2 Stacks tests', () => {
  let queue = new Queue();
  queue.enqueue(111).enqueue(222).enqueue(333);

  it('should successfully enqueue into a queue', () => {
    queue.enqueue(444);
    expect(queue.stack1.storage.length).toEqual(4);
  });

  it('should sucessfully dequeue a value', () => {
    let item = queue.dequeue();

    expect(item).toEqual(111);
  });

  it('should successfully enqueue multiple items into a queue', () => {
    queue.enqueue(444).enqueue(555).enqueue(666);
    expect(queue.stack1.storage.length).toEqual(6);
  });

});
