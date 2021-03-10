'use strict';

const SLList  = require('../../lib/linked-list.js');

describe('Singly Linked List', () => {

  it('should instantiate an empty linked list', () => {
    let newList = new SLList();
    expect(newList.head).toBeNull();
  });

  it('should insert a node into a linked list', () => {
    let newList = new SLList();
    newList.insert(8);

    expect(newList.head.value).toEqual(8);
  });

  it('the head property will point to the first node in the linked list', () => {
    let newList = new SLList();
    newList.insert(9);

    expect(newList.head.value).toEqual(9);
  });

  it('should properly insert multiple nodes into the linked list', () => {
    let newList = new SLList();
    newList.insert(5);
    newList.insert(8);
    newList.insert(15);

    expect(newList.head.value).toEqual(15);
    expect(newList.head.next.value).toEqual(8);
    expect(newList.head.next.next.value).toEqual(5);

  });

  it('should return true when finding a value within the linked list', () => {
    let newList = new SLList();
    newList.insert(5).insert(8).insert(15).insert(35);

    expect(newList.includes(5)).toBe(true);
  });

  it('should return false when finding a value that is not in the linked list', () => {
    let newList = new SLList();
    newList.insert(5).insert(8).insert(15).insert(35);

    expect(newList.includes(55)).toBe(false);
  });

  it('should print a collection of all the values that exists in the linked list', () => {
    let newList = new SLList();
    newList.insert(5).insert(8).insert(15).insert(35);
    let printedList = newList.toString();
    expect(printedList).toEqual('{35}->{15}->{8}->{5}->');
  });

  it('should add a node at the end of the list', () => {
    let newList = new SLList();
    newList.append(12).append(35);
    expect(newList.head.next.value).toEqual(35);
  });

  it('should add multiple nodes at the end of list', () => {
    let newList = new SLList();
    newList.append(12).append(35).append(88).append(99);
    expect(newList.head.next.next.value).toEqual(88);
    expect(newList.head.next.next.next.value).toEqual(99);
  });

  it('should add multiple nodes at the end of list', () => {
    let newList = new SLList();
    newList.append(12).append(35).append(88).append(99);
    expect(newList.head.next.next.value).toEqual(88);
    expect(newList.head.next.next.next.value).toEqual(99);
  });

  it('should insert a node before a node located in the middle of a linked list', () => {
    let newList = new SLList();
    newList.append(12).append(35).append(88).append(99);
    newList.insertBefore(88, 77);
    let printedList = newList.toString();
    expect(printedList).toEqual('{12}->{35}->{77}->{88}->{99}->');
  });

  it('should insert a node before the first node of a linked list', () => {
    let newList = new SLList();
    newList.append(12).append(35).append(88).append(99);
    newList.insertBefore(12, 123);
    expect(newList.head.value).toEqual(123);
  });

  it('should insert after a node in the middle of the linked list', () => {
    let newList = new SLList();
    newList.append(12).append(35).append(88).append(99);
    newList.insertAfter(35, 765);
    let printedList = newList.toString();
    expect(printedList).toEqual('{12}->{35}->{765}->{88}->{99}->');
  });

  it('should insert a node after the last node of the linked list', () => {
    let newList = new SLList();
    newList.append(12).append(35).append(88).append(99);
    newList.insertAfter(99, 1000);
    let printedList = newList.toString();
    expect(printedList).toEqual('{12}->{35}->{88}->{99}->{1000}->');
  });



});
