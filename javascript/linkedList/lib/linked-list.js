'use strict';

const SLNode = require('./node.js');

class SLList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if(this.head === null) {
      this.head = new SLNode(value);
      return this;
    }

    let temp = this.head;
    this.head = new SLNode(value);
    this.head.next = temp;
    return this;
  }

  includes(value) {
    if(this.head === null) {
      return false;
    }

    let current = this.head;

    if(current.value === value) {
      return true;
    }

    while(current.next !== null) {
      current = current.next;
      if(current.value === value) {
        return true;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';

    while(current !== null) {
      string += `{${current.value}}` + '->';
      current = current.next;
    }
    console.log(string);
    return string;
  }

}

module.exports = SLList;

