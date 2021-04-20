"use strict";

const Tree = require("../binary-search-tree.js");

describe("Find Max Value in Tree", () => {
  let tree;

  beforeAll(() => {
    tree = new Tree();
    tree.add(1).add(5).add(76);
  });

  it("should return max value in Binary Tree", () => {
    expect(tree.findMaxValue()).toEqual(76);
  });
});
