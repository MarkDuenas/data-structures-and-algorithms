"use strict";

const Tree = require("../binary-search-tree.js");

describe("Breadth First Traverse", () => {
  let tree;

  beforeAll(() => {
    tree = new Tree();
    tree.add(1).add(5).add(76).add(12).add(45).add(67);
  });

  it("should return an array of values using breadth first search", () => {
    expect(tree.breadthFirst()).toEqual([1, 5, 76, 12, 45, 67]);
  });
});
