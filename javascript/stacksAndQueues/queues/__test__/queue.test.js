'use strict';

const Queue = require('../queue.js');

describe('Queues Tests', () => {
  let queue = new Queue();
  queue.enqueue(111).enqueue(222).enqueue(333);

  it('should successfully enqueue into a queue', () => {
    expect(queue.front).toBe(111);
  });

  it('should sucessfully enqueue multiple values', () => {
    expect(queue.storage.length).toEqual(3);
  });

  it('should sucessfully dequeue a value', () => {
    let item = queue.dequeue();

    expect(item).toEqual(111);
  });

  it('should sucessfully peek into a queue', ()=> {
    expect(queue.peek()).toBe(222);
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });

  it('should successfully instantiate an empty queue', () => {
    let newQueue = new Queue();

    expect(newQueue.front).toBe(null);
  });

  it('should raise exception if you call dequeue or peek on empty queue', () => {
    let newQueue = new Queue();
    expect(newQueue.peek()).toBe(null);
    expect(newQueue.dequeue()).toBe(null);
  });



});
