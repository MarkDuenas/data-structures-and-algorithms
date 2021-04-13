"use strict";

const BinaryTree = require("./tree.js");
const Node = require("./node.js");

class BinarySearchTree extends BinaryTree {
  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    //pointer for the previous node so we can assign left/right after traversal
    let prev = null;

    //Traverses the entire tree to get to a leaf
    while (current) {
      prev = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // Checks prev values against passed value to see if the node belongs to the left or right
    if (value < prev.value) {
      prev.left = node;
    } else {
      prev.right = node;
    }
    return this;
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;

    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;

// let tree = new BinarySearchTree();

// console.log(tree.root);

// tree.add(111);

// console.log(tree.root);

// tree.add(222);

// console.log(tree.root);

// tree.add(12);

// console.log(tree.root);

// tree.add(55);

// console.log(tree.root);

// tree.add(100);

// console.log(JSON.stringify(tree.root, null, 4));

// tree.add(6);

// console.log(JSON.stringify(tree.root, null, 4));

// console.log(tree.contains(100));
// console.log(tree.contains(69));
