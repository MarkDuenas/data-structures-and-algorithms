"use strict";

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];

    let _walk = (node) => {
      nodes.push(node.value);

      if (node.left) {
        _walk(node.left);
      }

      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return nodes;
  }

  inOrder() {
    let nodes = [];

    let _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }

      nodes.push(node.value);

      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return nodes;
  }

  postOrder() {
    let nodes = [];

    let _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }

      if (node.right) {
        _walk(node.right);
      }

      nodes.push(node.value);
    };

    _walk(this.root);

    return nodes;
  }

  breadthFirst() {
    let nodes = [];
    let queue = [];

    queue.push(this.root); // queue.enque();

    while (queue.length) {
      // while queue.peek()
      // Do the work ...
      let currentNode = queue.shift(); // queue.dequeue();
      nodes.push(currentNode.value);

      // Keep traversing by queueing up the left and right
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return nodes;
  }
}

module.exports = BinaryTree;
