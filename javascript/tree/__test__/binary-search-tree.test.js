"use strict";

const Tree = require("../binary-search-tree.js");

describe("Binary Search Tree Tests", () => {
  let tree;
  beforeAll(() => {
    tree = new Tree();
  });

  it("can instantiate an empty tree", () => {
    expect(tree.root).toBe(null);
  });

  it("can instantiate a tree with a single root node", () => {
    tree.add(100);
    expect(tree.root.value).toEqual(100);
  });

  it("can add a left and right child to a root node", () => {
    tree.add(50).add(150);
    expect(tree.root.left.value).toBe(50);
    expect(tree.root.right.value).toBe(150);
  });

  it("can instantiate an empty tree", () => {
    let nodes = tree.preOrder();
    expect(nodes).toHaveLength(3);
  });

  it("can instantiate an empty tree", () => {
    let nodes = tree.postOrder();
    expect(nodes).toHaveLength(3);
  });

  it("can instantiate an empty tree", () => {
    let nodes = tree.inOrder();
    expect(nodes).toHaveLength(3);
  });
});
